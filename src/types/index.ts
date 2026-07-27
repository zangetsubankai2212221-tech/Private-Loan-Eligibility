export type WalletState = "uninstalled" | "disconnected" | "connected" | "wrong_network";

export type TransactionState =
  | "idle"
  | "generating_proof"
  | "submitting_tx"
  | "success"
  | "error";

export interface WalletInfo {
  address: string;
  networkId: string;
  balance: string;
}

export interface LoanFormData {
  income: number;
  creditScore: number;
}

export interface TransactionResult {
  txHash: string;
  isEligible: boolean;
}

export interface EnvironmentConfig {
  network: string;
  contractAddress: string;
  proofServerUrl: string;
  isValid: boolean;
  missingVars: string[];
}
