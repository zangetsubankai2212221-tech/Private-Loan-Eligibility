import type { LoanFormData, TransactionResult } from "../types";

// ── Mock wallet API type (no real Lace wallet dependency) ────────────

declare global {
  interface Window {
    midnight?: Record<string, unknown>;
  }
}

// ── Network helpers ─────────────────────────────────────────────────

export function getExpectedNetworkId(_network: string): string {
  return "preview";
}

export function normalizeNetworkId(raw: string): string {
  return raw.toLowerCase().includes("preview") ? "preview" : "preprod";
}

export function isWalletInstalled(): boolean {
  return true;
}

export function listWallets(): unknown[] {
  return [];
}

// ── Mock wallet connection ──────────────────────────────────────────

let connectedApi: unknown | null = null;

export function getConnectedApi(): unknown | null {
  return connectedApi;
}

export async function connectWallet(
  _desiredNetworkId: string
): Promise<{ address: string; networkId: string; rawNetworkId: string }> {
  connectedApi = {};
  return {
    address: "mn_add_mock_zkp9876543210",
    networkId: "preview",
    rawNetworkId: "preview",
  };
}

// ── Mock proof submission ───────────────────────────────────────────
// Simulates a 3-second ZK proof generation delay, then always succeeds.
// No real network requests, no proof server, no SDK imports.

export async function submitEligibilityProof(
  _proofServerUrl: string,
  _contractAddress: string,
  _walletAddress: string,
  _formData: LoanFormData
): Promise<TransactionResult> {
  // Simulate 3-second proof generation delay (UI shows ProgressVisualizer)
  await new Promise((r) => setTimeout(r, 3000));

  return {
    txHash: "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(""),
    isEligible: true,
  };
}

// ── Error parsing ───────────────────────────────────────────────────

export function parseContractError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred during eligibility evaluation.";
}