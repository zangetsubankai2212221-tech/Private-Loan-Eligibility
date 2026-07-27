import type { WalletState, WalletInfo } from "../types";
import type { NetworkWarning } from "../hooks/useWallet";

interface HeaderProps {
  walletState: WalletState;
  walletInfo: WalletInfo | null;
  walletNetworkWarning: NetworkWarning | null;
  network: string;
  connecting: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
  onDismissWarning: () => void;
}

export function Header({
  walletState,
  walletInfo,
  walletNetworkWarning,
  network,
  connecting,
  onConnect,
  onDisconnect,
  onDismissWarning,
}: HeaderProps) {
  const isMainnet = network.toLowerCase() === "mainnet";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-white/75 px-6 py-4 shadow-[0_18px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60">
      {/* Mainnet warning */}
      {isMainnet && (
        <div className="border-b border-red-200/80 bg-red-50/90 px-4 py-2 text-center text-sm font-semibold text-red-700 backdrop-blur-xl dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">
          WARNING — Connected to Mainnet. Switch to Preview/Preprod for development.
        </div>
      )}

      {/* Network mismatch warning banner */}
      {walletState === "wrong_network" && walletNetworkWarning && (
        <div className="border-b border-amber-200/80 bg-amber-50/90 px-4 py-3 backdrop-blur-xl dark:border-amber-800 dark:bg-amber-900/20">
          <div className="mx-auto flex max-w-4xl items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm font-semibold text-amber-800">
                Network Mismatch — Please switch networks in your Lace wallet
              </p>
              <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-amber-600">
                <span>
                  Expected:{" "}
                  <code className="rounded-md bg-amber-100 px-1.5 py-0.5 font-mono text-amber-800">
                    {walletNetworkWarning.expected}
                  </code>
                </span>
                <span>
                  Connected:{" "}
                  <code className="rounded-md bg-amber-100 px-1.5 py-0.5 font-mono text-amber-800">
                    {walletNetworkWarning.rawConnected || walletNetworkWarning.connected}
                  </code>
                </span>
              </div>
              <p className="mt-1.5 text-xs text-amber-500">
                Open the Lace wallet extension, switch to the{" "}
                <strong>{walletNetworkWarning.expected}</strong> network, then reconnect.
              </p>
            </div>
            <button
              onClick={onDismissWarning}
              className="mt-0.5 flex-shrink-0 rounded-lg p-1 text-amber-400 transition hover:bg-amber-100 hover:text-amber-600"
              title="Dismiss"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main header bar */}
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-primary-600 to-cyan-500 shadow-[0_18px_50px_rgba(79,70,229,0.28)]">
            <svg
              className="h-5 w-5 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-gray-950 dark:text-white">Private Loan Eligibility</h1>
            <p className="text-[11px] font-medium text-primary-600 dark:text-cyan-300">Midnight Network · Zero-Knowledge Gate</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Network status badge */}
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/75 px-3.5 py-1.5 text-xs font-semibold text-primary-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
            {network}
          </div>

          {/* Connected address pill */}
          {(walletState === "connected" || walletState === "wrong_network") && walletInfo && (
            <span
              className={`rounded-full px-3 py-1.5 font-mono text-xs ${
                walletState === "wrong_network"
                  ? "border border-amber-200 bg-amber-50 text-amber-700"
                  : "border border-white/15 bg-white/75 text-primary-700"
              }`}
            >
              {walletInfo.address.slice(0, 8)}…{walletInfo.address.slice(-6)}
            </span>
          )}

          {/* Action button */}
          {walletState === "uninstalled" ? (
            <a
              href="https://lace.io"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-indigo-500 via-primary-600 to-cyan-500 px-5 py-2 font-medium text-white shadow-[0_18px_50px_rgba(79,70,229,0.28)] transition-all hover:-translate-y-0.5"
            >
              Install Lace
            </a>
          ) : walletState === "connected" ? (
            <button
              onClick={onDisconnect}
              className="rounded-full border border-white/15 bg-white/75 px-5 py-2 font-semibold text-primary-700 transition-all hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-cyan-300"
            >
              Disconnect
            </button>
          ) : walletState === "wrong_network" ? (
            <button
              onClick={onConnect}
              disabled={connecting}
              className="rounded-full border border-amber-300 bg-amber-50 px-5 py-2 font-semibold text-amber-700 transition-all hover:-translate-y-0.5 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {connecting ? "Reconnecting…" : "Reconnect"}
            </button>
          ) : (
            <button
              onClick={onConnect}
              disabled={connecting}
              className="rounded-full bg-gradient-to-r from-indigo-500 via-primary-600 to-cyan-500 px-5 py-2 font-medium text-white shadow-[0_18px_50px_rgba(79,70,229,0.28)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {connecting ? "Connecting…" : "Connect Wallet"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
