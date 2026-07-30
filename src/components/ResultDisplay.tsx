import type { TransactionResult } from "../types";

interface ResultDisplayProps {
  result: TransactionResult | null;
  error: string | null;
  onReset: () => void;
}

export function ResultDisplay({ result, error, onReset }: ResultDisplayProps) {
  if (!result && !error) return null;

  return (
    <div className="mt-6 space-y-4">
      {result && (
        <div
          className={`rounded-2xl border px-6 py-5 ${
            result.isEligible
              ? "border-emerald-200/80 bg-emerald-50/85 dark:border-emerald-800 dark:bg-emerald-900/20"
              : "border-red-200/80 bg-red-50/85 dark:border-red-800 dark:bg-red-900/20"
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-lg font-bold ${
                result.isEligible
                  ? "bg-emerald-100 text-emerald-600 shadow-[0_14px_40px_rgba(16,185,129,0.18)] dark:bg-emerald-900/40 dark:text-emerald-400"
                  : "bg-red-100 text-red-600 shadow-[0_14px_40px_rgba(239,68,68,0.18)] dark:bg-red-900/40 dark:text-red-400"
              }`}
            >
              {result.isEligible ? "✓" : "✗"}
            </div>
            <div className="flex-1">
              <h3
                className={`text-lg font-bold ${
                  result.isEligible ? "text-emerald-800 dark:text-emerald-300" : "text-red-800 dark:text-red-300"
                }`}
              >
                {result.isEligible
                  ? "Eligibility Confirmed On-Chain"
                  : "Eligibility Denied"}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {result.isEligible
                  ? "Your loan eligibility has been verified and recorded on the Midnight Network. No personal financial data was disclosed."
                  : "The zero-knowledge proof could not be generated. One or more eligibility criteria were not met."}
              </p>
              {result.simulated && (
                <div className="mt-3 rounded-2xl border border-amber-200/80 bg-amber-50/85 px-3.5 py-2.5 shadow-[0_12px_40px_rgba(245,158,11,0.10)] dark:border-amber-800 dark:bg-amber-900/20">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Simulated Proof
                  </span>
                  <p className="mt-0.5 text-xs text-amber-700 dark:text-amber-300">
                    Proof server unreachable — eligibility determined by local validation only. Run the Docker proof server for actual ZK proofs.
                  </p>
                </div>
              )}
              {result.txHash && result.txHash !== "unknown" && (
                <div className="mt-3 rounded-2xl border border-white/15 bg-white/75 px-3.5 py-2.5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-500 dark:text-purple-400">
                    Transaction Hash
                  </span>
                  <p className="mt-0.5 break-all font-mono text-xs text-gray-700 dark:text-gray-200">
                    {result.txHash}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-red-200/80 bg-red-50/85 px-6 py-5 dark:border-red-800 dark:bg-red-900/20">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-lg font-bold text-red-600 shadow-[0_14px_40px_rgba(239,68,68,0.18)] dark:bg-red-900/40 dark:text-red-400">
              ✗
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300">Evaluation Failed</h3>
              <p className="mt-1 whitespace-pre-line text-sm text-red-700 dark:text-red-400 leading-relaxed">{error}</p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={onReset}
        className="w-full rounded-full border border-white/15 bg-white/75 px-4 py-3 text-sm font-semibold text-primary-700 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-primary-800 dark:border-white/10 dark:bg-white/5 dark:text-cyan-300 dark:hover:bg-white/10"
      >
        Try Another Evaluation
      </button>
    </div>
  );
}
