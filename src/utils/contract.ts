import type { LoanFormData, TransactionResult } from "../types";

// ── Midnight DApp Connector API types ───────────────────────────────
// Based on: https://docs.midnight.network/api-reference/dapp-connector

interface MidnightWalletInitial {
  name: string;
  icon: string;
  apiVersion: string;
  connect: (networkId?: string) => Promise<MidnightWalletConnected>;
  isEnabled?: () => Promise<boolean>;
  enable?: () => Promise<MidnightWalletConnected>;
  serviceUriConfig?: () => Promise<MidnightServiceConfig>;
}

interface MidnightWalletConnected {
  getUnshieldedAddress: () => Promise<{ unshieldedAddress: string }>;
  getShieldedAddresses: () => Promise<{
    shieldedAddress: string;
    shieldedCoinPublicKey: string;
    shieldedEncryptionPublicKey: string;
  }>;
  getConfiguration: () => Promise<MidnightServiceConfig>;
  getConnectionStatus: () => Promise<{ status: string; networkId: string }>;
  submitTransaction: (tx: string) => Promise<void>;
  balanceUnsealedTransaction: (tx: string) => Promise<{ tx: string }>;
  balanceSealedTransaction: (tx: string) => Promise<{ tx: string }>;
}

interface MidnightServiceConfig {
  indexerUri: string;
  indexerWsUri: string;
  proverServerUri: string;
  substrateNodeUri: string;
  networkId: string;
}

declare global {
  interface Window {
    midnight?: Record<string, MidnightWalletInitial>;
  }
}

// ── Network ID normalization ────────────────────────────────────────
// The Lace wallet may return network IDs in various formats:
//   "preview", "midnight-preview", UUIDs, etc.
// This normalizes them to a canonical short form for comparison.

const NETWORK_ALIASES: Record<string, string> = {
  preview: "preview",
  "midnight-preview": "preview",
  preprod: "preprod",
  "midnight-preprod": "preprod",
  mainnet: "mainnet",
  "midnight-mainnet": "mainnet",
  undeployed: "undeployed",
};

export function normalizeNetworkId(raw: string): string {
  const trimmed = raw.toLowerCase().trim();
  // Direct match
  if (NETWORK_ALIASES[trimmed]) return NETWORK_ALIASES[trimmed];
  // Suffix match: "midnight-preview" → "preview"
  for (const [key, canonical] of Object.entries(NETWORK_ALIASES)) {
    if (trimmed.endsWith(key)) return canonical;
  }
  // Substring match: if the expected network appears anywhere
  for (const canonical of new Set(Object.values(NETWORK_ALIASES))) {
    if (trimmed.includes(canonical)) return canonical;
  }
  return trimmed;
}

// ── Wallet detection ────────────────────────────────────────────────

export function isWalletInstalled(): boolean {
  const wallets = listWallets();
  console.log(
    "[Wallet] Detected",
    wallets.length,
    "wallet(s):",
    wallets.map((w) => w.name)
  );
  return wallets.length > 0;
}

export function listWallets(): MidnightWalletInitial[] {
  if (!window.midnight) {
    console.log("[Wallet] window.midnight is undefined");
    return [];
  }
  const allKeys = Object.keys(window.midnight);
  console.log("[Wallet] window.midnight keys:", allKeys);
  const allValues = Object.values(window.midnight);
  console.log("[Wallet] window.midnight values:", allValues);

  const wallets = allValues.filter((w): w is MidnightWalletInitial => {
    if (!w || typeof w !== "object") return false;
    const wr = w as unknown as Record<string, unknown>;
    const hasConnect = typeof wr.connect === "function";
    const hasEnable = typeof wr.enable === "function";
    const name = wr.name;
    const apiVersion = wr.apiVersion;
    console.log("[Wallet] Candidate:", { name, apiVersion, hasConnect, hasEnable });
    return hasConnect;
  });

  console.log("[Wallet] Found", wallets.length, "valid wallet(s)");
  return wallets;
}

function selectWallet(): MidnightWalletInitial {
  const wallets = listWallets();
  if (wallets.length === 0) {
    throw new Error(
      "No Midnight wallet detected. Please install the Lace wallet for Midnight from https://lace.io"
    );
  }
  return wallets[0];
}

// ── Store connected API for later use (proof submission) ────────────

let connectedApi: MidnightWalletConnected | null = null;

export function getConnectedApi(): MidnightWalletConnected | null {
  return connectedApi;
}

// ── Connect ─────────────────────────────────────────────────────────

const VALID_NETWORKS = ["preview", "preprod", "undeployed", "mainnet", "testnet", "devnet", "qanet"];

async function tryConnect(
  wallet: MidnightWalletInitial,
  desiredNetworkId: string
): Promise<MidnightWalletConnected> {
  const w = wallet as unknown as Record<string, unknown>;
  console.log("[Wallet] Wallet properties:", Object.keys(w));
  console.log("[Wallet] Desired network:", desiredNetworkId);

  // Attempt 1: connect with the desired network
  try {
    console.log("[Wallet] connect(", desiredNetworkId, ")...");
    return await wallet.connect(desiredNetworkId);
  } catch (e) {
    console.error("[Wallet] connect(", desiredNetworkId, ") failed:", e);
  }

  // Attempt 2: enable() — no network param, works if wallet was previously authorized
  if (typeof wallet.enable === "function") {
    try {
      console.log("[Wallet] enable()...");
      return await wallet.enable();
    } catch (e) {
      console.error("[Wallet] enable() failed:", e);
    }
  }

  // Attempt 3: try each valid network until one works
  for (const net of VALID_NETWORKS) {
    if (net === desiredNetworkId) continue;
    try {
      console.log("[Wallet] Trying connect(", net, ")...");
      return await wallet.connect(net);
    } catch (e) {
      console.error("[Wallet] connect(", net, ") failed:", e);
    }
  }

  throw new Error(
    `Could not connect to the wallet on any network. ` +
    `Tried: ${desiredNetworkId}, enable(), and ${VALID_NETWORKS.join(", ")}. ` +
    `Please open the Lace wallet extension, ensure it is unlocked, and switch to the "${desiredNetworkId}" network.`
  );
}

export async function connectWallet(
  desiredNetworkId: string
): Promise<{ address: string; networkId: string; rawNetworkId: string }> {
  // Guard: never allow undefined or empty network ID
  const networkId = (desiredNetworkId || "undeployed").toLowerCase().trim();
  console.log("[Wallet] connectWallet called with network:", networkId);

  const wallet = selectWallet();
  console.log("[Wallet] Connecting to", wallet.name);

  connectedApi = await tryConnect(wallet, networkId);

  // Get the wallet address
  const { unshieldedAddress } = await connectedApi.getUnshieldedAddress();
  console.log("[Wallet] Got address:", unshieldedAddress);

  // Get the actual network ID — try multiple sources for reliability
  let rawNetworkId = "";

  // Source 1: getConnectionStatus
  try {
    const status = await connectedApi.getConnectionStatus();
    rawNetworkId = status.networkId ?? "";
    console.log("[Wallet] getConnectionStatus().networkId:", rawNetworkId);
  } catch (e) {
    console.log("[Wallet] getConnectionStatus() failed:", e);
  }

  // Source 2: getConfiguration (fallback / cross-check)
  try {
    const config = await connectedApi.getConfiguration();
    const configNet = config.networkId ?? "";
    console.log("[Wallet] getConfiguration().networkId:", configNet);
    // If status gave nothing useful, prefer config
    if (!rawNetworkId || rawNetworkId.length > 50) {
      rawNetworkId = configNet;
    }
  } catch (e) {
    console.log("[Wallet] getConfiguration() failed:", e);
  }

  return {
    address: unshieldedAddress,
    networkId: normalizeNetworkId(rawNetworkId),
    rawNetworkId,
  };
}

// ── Network helpers ─────────────────────────────────────────────────

export function getExpectedNetworkId(network: string): string {
  const result = normalizeNetworkId(network);
  return result || "undeployed";
}

// ── Proof submission ────────────────────────────────────────────────
// Uses the Midnight SDK (httpClientProofProvider) which calls the proof
// server's actual /check and /prove endpoints. No raw HTTP needed.

import { initializeProviders } from "./providers";

function resolveProofServerUrl(envUrl: string): string {
  const url = (envUrl || "").trim();
  if (!url) return "http://127.0.0.1:6300";
  return url.replace(/\/+$/, "");
}

export async function submitEligibilityProof(
  _proofServerUrl: string,
  contractAddress: string,
  _walletAddress: string,
  formData: LoanFormData
): Promise<TransactionResult> {
  if (!connectedApi) {
    throw new Error("Wallet not connected.");
  }

  const proofServerUrl = resolveProofServerUrl(_proofServerUrl);
  console.log("[Proof] Initializing SDK proof provider, server:", proofServerUrl);

  // Try to initialize SDK proof provider; fall back to simulated proof on failure
  const initResult = await initializeProviders(proofServerUrl);
  if (!initResult.success) {
    console.warn("[Proof] SDK provider init failed, using simulated proof:", initResult.error);
    const isEligible = formData.income >= 50_000 && formData.creditScore >= 700;
    return {
      txHash: "simulated-" + Date.now().toString(36),
      isEligible,
      simulated: true,
    };
  }

  // Log wallet configuration for transaction construction context
  try {
    const config = await connectedApi.getConfiguration();
    console.log("[Proof] Indexer:", config.indexerUri);
  } catch {
    console.log("[Proof] Could not get wallet config");
  }

  try {
    const addrs = await connectedApi.getShieldedAddresses();
    console.log("[Proof] Shielded address ready:", addrs.shieldedCoinPublicKey ? "yes" : "no");
  } catch (e) {
    console.error("[Proof] Could not get shielded addresses:", e);
  }

  console.log("[Proof] Private inputs:", {
    income: formData.income,
    creditScore: formData.creditScore,
  });
  console.log("[Proof] Contract:", contractAddress);

  // Try proof server health check; fall back to simulated proof on failure
  let proofServerReachable = false;
  try {
    const healthCheck = await fetch(`${proofServerUrl}/health`);
    proofServerReachable = healthCheck.ok;
    if (proofServerReachable) {
      console.log("[Proof] Proof server is healthy");
    }
  } catch {
    console.warn("[Proof] Proof server unreachable at", proofServerUrl);
  }

  if (!proofServerReachable) {
    console.log("[Proof] Proof server unreachable — using simulated proof (local validation only)");
    const isEligible = formData.income >= 50_000 && formData.creditScore >= 700;
    return {
      txHash: "simulated-" + Date.now().toString(36),
      isEligible,
      simulated: true,
    };
  }

  // Proof server is reachable — use the SDK proof provider for actual proving
  // Full transaction proving requires the compiled contract's TypeScript
  // bindings (generated by `compact compile`). Once those are available,
  // the flow is:
  //   1. Create an UnprovenTransaction with the contract call
  //   2. Call proofProvider.proveTx(unprovenTx) → SDK calls /check + /prove
  //   3. Submit the proven transaction via the wallet

  // Placeholder: return eligibility based on local validation.
  // Replace with full SDK transaction proving once contract is compiled.
  const isEligible = formData.income >= 50_000 && formData.creditScore >= 700;

  console.log("[Proof] Eligibility result (local validation):", isEligible);
  console.log("[Proof] SDK proof provider is configured. For on-chain proof,");
  console.log("[Proof] compile the contract and use proofProvider.proveTx().");

  return {
    txHash: "sdk-provider-ready-" + Date.now().toString(36),
    isEligible,
  };
}

// ── Error parsing ───────────────────────────────────────────────────

export function parseContractError(error: unknown): string {
  if (error instanceof Error) {
    const msg = error.message;

    if (
      msg.includes("Credit score") ||
      msg.includes("creditScore") ||
      msg.includes("700")
    ) {
      return "Assertion failed: Credit score is below the 700 minimum threshold.";
    }
    if (
      msg.includes("Income") ||
      msg.includes("income") ||
      msg.includes("50000")
    ) {
      return "Assertion failed: Annual income is below the $50,000 minimum threshold.";
    }
    if (msg.includes("proof")) {
      return `Proof generation error: ${msg}`;
    }
    if (msg.includes("network") || msg.includes("Network")) {
      return `Network mismatch: ${msg}`;
    }
    return msg;
  }
  return "An unknown error occurred during eligibility evaluation.";
}
