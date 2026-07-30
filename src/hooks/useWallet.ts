import { useState, useCallback } from "react";
import type { WalletState, WalletInfo } from "../types";

export interface NetworkWarning {
  expected: string;
  connected: string;
  rawConnected: string;
}

export interface UseWalletReturn {
  walletState: WalletState;
  walletInfo: WalletInfo | null;
  walletError: string | null;
  walletNetworkWarning: NetworkWarning | null;
  connecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  clearError: () => void;
  clearNetworkWarning: () => void;
}

// ── Mock wallet constants ────────────────────────────────────────────

const MOCK_ADDRESS = "mn_add_mock_zkp9876543210";
const MOCK_NETWORK = "preview";

export function useWallet(): UseWalletReturn {
  const [walletState, setWalletState] = useState<WalletState>("disconnected");
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [walletError, setWalletError] = useState<string | null>(null);
  const [walletNetworkWarning, setWalletNetworkWarning] = useState<NetworkWarning | null>(null);
  const [connecting, setConnecting] = useState(false);

  const clearError = useCallback(() => setWalletError(null), []);
  const clearNetworkWarning = useCallback(() => setWalletNetworkWarning(null), []);

  const connect = useCallback(async () => {
    setWalletError(null);
    setWalletNetworkWarning(null);
    setConnecting(true);
    setWalletState("connecting");

    // Simulate a brief handshake delay for realistic UX
    await new Promise((r) => setTimeout(r, 300));

    setWalletState("connected");
    setWalletInfo({ address: MOCK_ADDRESS, networkId: MOCK_NETWORK, balance: "—" });
    setConnecting(false);
  }, []);

  const disconnect = useCallback(() => {
    setWalletState("disconnected");
    setWalletInfo(null);
    setWalletError(null);
    setWalletNetworkWarning(null);
  }, []);

  return {
    walletState,
    walletInfo,
    walletError,
    walletNetworkWarning,
    connecting,
    connect,
    disconnect,
    clearError,
    clearNetworkWarning,
  };
}