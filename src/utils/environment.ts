import type { EnvironmentConfig } from "../types";

function readEnv(key: string, fallback = ""): string {
  const val = import.meta.env[key];
  return (val as string | undefined)?.trim() || fallback;
}

export function loadEnvironment(): EnvironmentConfig {
  const network = readEnv("VITE_NETWORK", "preview");
  const contractAddress = readEnv("VITE_CONTRACT_ADDRESS", "0x187ab583926a5ff2e4819242a95edc8dfa8ff784");
  const proofServerUrl = readEnv("VITE_PROOF_SERVER_URL", "http://localhost:6300");

  const missingVars: string[] = [];
  if (!network) missingVars.push("VITE_NETWORK");

  return {
    network,
    contractAddress,
    proofServerUrl,
    isValid: missingVars.length === 0,
    missingVars,
  };
}

export function isMainnet(config: EnvironmentConfig): boolean {
  return config.network.toLowerCase() === "mainnet";
}

export function isPreviewOrPreprod(config: EnvironmentConfig): boolean {
  const n = config.network.toLowerCase();
  return n === "preview" || n === "preprod";
}
