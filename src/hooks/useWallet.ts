import { useState, useEffect, useCallback } from "react";
import type { WalletState, WalletInfo } from "../types";
import { isWalletInstalled, connectWallet, getExpectedNetworkId } from "../utils/contract";
import { loadEnvironment } from "../utils/environment";

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

export function useWallet(): UseWalletReturn {
  const [walletState, setWalletState] = useState<WalletState>("disconnected");
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [walletError, setWalletError] = useState<string | null>(null);
  const [walletNetworkWarning, setWalletNetworkWarning] = useState<NetworkWarning | null>(null);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    if (!isWalletInstalled()) {
      setWalletState("uninstalled");
      setWalletError(
        "Lace Wallet extension was not detected. Install it from https://lace.io and reload this page."
      );
    }
  }, []);

  const clearError = useCallback(() => setWalletError(null), []);
  const clearNetworkWarning = useCallback(() => setWalletNetworkWarning(null), []);

  const connect = useCallback(async () => {
    setWalletError(null);
    setWalletNetworkWarning(null);

    if (!isWalletInstalled()) {
      setWalletState("uninstalled");
      setWalletError(
        "Lace Wallet extension was not detected. Install it from https://lace.io and reload this page."
      );
      return;
    }

    setConnecting(true);

    try {
      const config = loadEnvironment();
      const desiredNetwork = getExpectedNetworkId(config.network);

      const { address, networkId, rawNetworkId } = await connectWallet(desiredNetwork);

      // Compare normalized network IDs
      const networkMatch = networkId === desiredNetwork;

      if (!networkMatch) {
        // Non-blocking: wallet is connected but on a different network
        setWalletState("wrong_network");
        setWalletInfo({ address, networkId: rawNetworkId || networkId, balance: "—" });
        setWalletNetworkWarning({
          expected: desiredNetwork,
          connected: networkId,
          rawConnected: rawNetworkId,
        });
        return;
      }

      setWalletState("connected");
      setWalletInfo({ address, networkId: rawNetworkId || networkId, balance: "—" });
    } catch (err) {
      console.error("[Wallet] Connection failed:", err);
      const msg = err instanceof Error ? err.message : "Unknown wallet error";
      setWalletState("disconnected");
      setWalletInfo(null);
      setWalletError(`Wallet connection failed: ${msg}`);
    } finally {
      setConnecting(false);
    }
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
