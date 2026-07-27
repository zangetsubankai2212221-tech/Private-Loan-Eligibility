/**
 * Midnight SDK provider setup.
 *
 * Uses httpClientProofProvider + FetchZkConfigProvider so proof generation
 * goes through the official SDK, which calls the proof server's actual
 * /check and /prove endpoints (not /generate-proof).
 *
 * ZK artifacts (keys/, zkir/) must be compiled via `compact compile` and
 * placed in public/keys/ and public/zkir/ so FetchZkConfigProvider can
 * retrieve them at runtime from the app's origin.
 *
 * IMPORTANT: SDK imports are lazy (dynamic import) to prevent the broken
 * compact-js dependency from crashing the entire app at module load time.
 */

import type { ProofProvider, ZKConfigProvider } from "@midnight-ntwrk/midnight-js-types";

export type LoanEligibilityCircuitKeys = "loan_eligibility";

let cachedZkConfigProvider: ZKConfigProvider<LoanEligibilityCircuitKeys> | null = null;
let cachedProofProvider: ProofProvider | null = null;

let sdkLoadError: string | null = null;

export function getSdkLoadError(): string | null {
  return sdkLoadError;
}

async function loadSdkModules() {
  const [httpMod, zkMod] = await Promise.all([
    import("@midnight-ntwrk/midnight-js-http-client-proof-provider"),
    import("@midnight-ntwrk/midnight-js-fetch-zk-config-provider"),
  ]);
  return {
    httpClientProofProvider: httpMod.httpClientProofProvider,
    FetchZkConfigProvider: zkMod.FetchZkConfigProvider,
  };
}

export function getZkConfigProvider(): ZKConfigProvider<LoanEligibilityCircuitKeys> {
  if (!cachedZkConfigProvider) {
    throw new Error(
      "ZK config provider not initialized. Call await initializeProviders() first."
    );
  }
  return cachedZkConfigProvider;
}

export function getProofProvider(): ProofProvider {
  if (!cachedProofProvider) {
    throw new Error(
      "Proof provider not initialized. Call await initializeProviders() first."
    );
  }
  return cachedProofProvider;
}

export async function initializeProviders(
  proofServerUrl: string = "http://127.0.0.1:6300"
): Promise<{ success: boolean; error?: string }> {
  try {
    const { httpClientProofProvider, FetchZkConfigProvider } = await loadSdkModules();

    if (!cachedZkConfigProvider) {
      cachedZkConfigProvider = new FetchZkConfigProvider<LoanEligibilityCircuitKeys>(
        window.location.origin,
        fetch.bind(window)
      );
      console.log("[SDK] FetchZkConfigProvider initialized from", window.location.origin);
    }

    if (!cachedProofProvider) {
      const url = proofServerUrl.replace(/\/+$/, "");
      cachedProofProvider = httpClientProofProvider<LoanEligibilityCircuitKeys>(
        url,
        cachedZkConfigProvider
      );
      console.log("[SDK] httpClientProofProvider initialized, server:", url);
    }

    sdkLoadError = null;
    return { success: true };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    sdkLoadError = msg;
    console.error("[SDK] Failed to initialize providers:", msg);
    return { success: false, error: msg };
  }
}

export function resetProviders(): void {
  cachedProofProvider = null;
  cachedZkConfigProvider = null;
  sdkLoadError = null;
  console.log("[SDK] Providers reset");
}
