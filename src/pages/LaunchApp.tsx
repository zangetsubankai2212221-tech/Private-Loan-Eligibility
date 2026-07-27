import { useState, useCallback } from "react";
import type { LoanFormData, TransactionState, TransactionResult } from "../types";
import { useWallet } from "../hooks/useWallet";
import { useEnvironment } from "../hooks/useEnvironment";
import { submitEligibilityProof, parseContractError } from "../utils/contract";
import { LoanForm } from "../components/LoanForm";
import { ProgressVisualizer } from "../components/ProgressVisualizer";
import { ResultDisplay } from "../components/ResultDisplay";
import { ConfigError } from "../components/ConfigError";

export function LaunchAppPage() {
  const config = useEnvironment();
  const {
    walletState,
    walletInfo,
    walletError,
    walletNetworkWarning,
    connecting,
    connect,
    disconnect,
    clearError,
    clearNetworkWarning,
  } = useWallet();

  const [transactionState, setTransactionState] = useState<TransactionState>("idle");
  const [result, setResult] = useState<TransactionResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleEvaluate = useCallback(
    async (formData: LoanFormData) => {
      setResult(null);
      setErrorMessage(null);

      if (walletState !== "connected" || !walletInfo) {
        setErrorMessage("Please connect your Lace wallet before evaluating eligibility.");
        setTransactionState("error");
        return;
      }

      try {
        setTransactionState("generating_proof");
        await new Promise((r) => setTimeout(r, 200));
        setTransactionState("submitting_tx");

        const txResult = await submitEligibilityProof(
          config.proofServerUrl,
          config.contractAddress,
          walletInfo.address,
          formData
        );

        setResult(txResult);
        setTransactionState("success");
      } catch (err) {
        const message = parseContractError(err);
        setErrorMessage(message);
        setTransactionState("error");
      }
    },
    [walletState, walletInfo, config]
  );

  const handleReset = useCallback(() => {
    setTransactionState("idle");
    setResult(null);
    setErrorMessage(null);
  }, []);

  if (!config.isValid) {
    return <ConfigError config={config} />;
  }

  const formDisabled =
    walletState !== "connected" ||
    transactionState === "generating_proof" ||
    transactionState === "submitting_tx";

  return (
    <div className="min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_24%)]" />
      <div className="container-page">
        {/* Page header */}
        <div className="mx-auto mb-12 max-w-2xl rounded-[2rem] border border-white/15 bg-white/65 px-6 py-10 text-center shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/55">
          <h1 className="text-section font-semibold tracking-tight text-gray-950 dark:text-white">
            Loan Eligibility Check
          </h1>
          <p className="mt-3 text-body-lg text-slate-600 dark:text-slate-300">
            Enter your financial details. A zero-knowledge proof will verify your
            eligibility without revealing your actual income or credit score.
          </p>
        </div>

        {/* App card */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-[2rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.8))] p-8 shadow-[0_24px_90px_rgba(15,23,42,0.10)] backdrop-blur-xl lg:p-10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-300/80 hover:shadow-[0_28px_100px_rgba(79,70,229,0.10)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(15,23,42,0.66))]">
            {/* Wallet status bar */}
            <div className="mb-8 flex flex-col gap-4 rounded-[1.5rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.78))] px-5 py-4 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(15,23,42,0.62))]">
              <div className="flex items-center gap-3">
                <div className={`h-2.5 w-2.5 rounded-full ${
                  walletState === "connected" ? "bg-emerald-400" :
                  walletState === "wrong_network" ? "bg-amber-400" :
                  walletState === "uninstalled" ? "bg-red-400" :
                  "bg-gray-300 dark:bg-gray-600"
                }`} />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {walletState === "connected" ? "Wallet Connected" :
                   walletState === "wrong_network" ? "Wrong Network" :
                   walletState === "uninstalled" ? "Wallet Not Installed" :
                   "Wallet Disconnected"}
                </span>
                {walletInfo && (
                  <span className="rounded-full border border-white/15 bg-white/80 px-2.5 py-1 font-mono text-xs text-gray-500 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
                    {walletInfo.address.slice(0, 6)}…{walletInfo.address.slice(-4)}
                  </span>
                )}
              </div>

              {walletState === "connected" ? (
                <button
                  onClick={disconnect}
                  className="rounded-full border border-white/15 bg-white/75 px-4 py-2 text-xs font-semibold text-primary-700 transition-all hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-cyan-300"
                >
                  Disconnect
                </button>
              ) : (
                <button
                  onClick={connect}
                  disabled={connecting}
                  className="rounded-full bg-gradient-to-r from-indigo-500 via-primary-600 to-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_18px_50px_rgba(79,70,229,0.28)] transition-all hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {connecting ? "Connecting…" : "Connect Wallet"}
                </button>
              )}
            </div>

            {/* Network mismatch warning */}
            {walletState === "wrong_network" && walletNetworkWarning && (
              <div className="mb-6 rounded-[1.5rem] border border-amber-200/80 bg-[linear-gradient(180deg,rgba(255,251,235,0.94),rgba(255,247,237,0.86))] px-5 py-4 shadow-[0_16px_50px_rgba(245,158,11,0.10)] dark:border-amber-800 dark:bg-[linear-gradient(180deg,rgba(69,26,3,0.48),rgba(69,26,3,0.28))]">
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">Network Mismatch</p>
                <div className="mt-2 flex flex-wrap gap-4 text-xs text-amber-600 dark:text-amber-400">
                  <span>Expected: <code className="rounded bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 font-mono text-amber-800 dark:text-amber-300">{walletNetworkWarning.expected}</code></span>
                  <span>Connected: <code className="rounded bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 font-mono text-amber-800 dark:text-amber-300">{walletNetworkWarning.rawConnected || walletNetworkWarning.connected}</code></span>
                </div>
                <button onClick={clearNetworkWarning} className="mt-3 text-xs font-medium text-amber-700 dark:text-amber-400 underline hover:text-amber-600">Dismiss</button>
              </div>
            )}

            {/* Wallet uninstalled */}
            {walletState === "uninstalled" && (
              <div className="mb-6 rounded-[1.5rem] border border-amber-200/80 bg-[linear-gradient(180deg,rgba(255,251,235,0.94),rgba(255,247,237,0.86))] px-5 py-4 text-center shadow-[0_16px_50px_rgba(245,158,11,0.10)] dark:border-amber-800 dark:bg-[linear-gradient(180deg,rgba(69,26,3,0.48),rgba(69,26,3,0.28))]">
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  Lace Wallet is not installed.{" "}
                  <a href="https://lace.io" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-amber-600">
                    Install it here
                  </a>
                </p>
              </div>
            )}

            {/* Wallet error */}
            {walletError && walletState !== "uninstalled" && (
              <div className="mb-6 rounded-[1.5rem] border border-red-200/80 bg-[linear-gradient(180deg,rgba(254,242,242,0.94),rgba(255,241,242,0.86))] px-5 py-4 text-sm text-red-700 shadow-[0_16px_50px_rgba(239,68,68,0.10)] dark:border-red-800 dark:bg-[linear-gradient(180deg,rgba(69,10,10,0.5),rgba(69,10,10,0.3))] dark:text-red-300">
                {walletError}
                <button onClick={clearError} className="ml-2 underline hover:text-red-500">Dismiss</button>
              </div>
            )}

            {/* Form */}
            <LoanForm
              transactionState={transactionState}
              onSubmit={handleEvaluate}
              disabled={formDisabled}
            />

            {/* Progress */}
            <ProgressVisualizer transactionState={transactionState} />

            {/* Result */}
            <ResultDisplay
              result={result}
              error={errorMessage}
              onReset={handleReset}
            />
          </div>

          {/* Footer note */}
          <p className="mt-8 text-center text-small text-slate-500 dark:text-slate-400">
            Powered by Midnight Network · Compact Zero-Knowledge Proofs ·{" "}
            <span className="text-primary-400">Your financial data is never transmitted on-chain</span>
          </p>
        </div>
      </div>
    </div>
  );
}
