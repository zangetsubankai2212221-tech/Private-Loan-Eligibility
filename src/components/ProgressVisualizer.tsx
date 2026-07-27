import type { TransactionState } from "../types";

interface ProgressVisualizerProps {
  transactionState: TransactionState;
}

function Spinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin text-cyan-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export function ProgressVisualizer({ transactionState }: ProgressVisualizerProps) {
  if (transactionState === "idle") return null;

  return (
    <div className="mt-6 space-y-4">
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-3">
        <StepDot
          active={transactionState === "generating_proof"}
          complete={
            transactionState === "submitting_tx" ||
            transactionState === "success"
          }
          label="ZK Proof"
        />
        <div
          className={`h-0.5 w-14 rounded-full transition-colors ${
            transactionState === "submitting_tx" || transactionState === "success"
              ? "bg-gradient-to-r from-indigo-500 via-primary-500 to-cyan-500"
              : "bg-white/20"
          }`}
        />
        <StepDot
          active={transactionState === "submitting_tx"}
          complete={transactionState === "success"}
          label="On-Chain"
        />
      </div>

      {/* Status message */}
      {transactionState === "generating_proof" && (
        <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/70 px-5 py-4 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <Spinner />
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
              Generating Zero-Knowledge Proof locally…
            </p>
            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              Your financial data never leaves this device
            </p>
          </div>
        </div>
      )}

      {transactionState === "submitting_tx" && (
        <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/70 px-5 py-4 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <Spinner />
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
            Submitting proof to Midnight Network…
          </p>
        </div>
      )}
    </div>
  );
}

function StepDot({
  active,
  complete,
  label,
}: {
  active: boolean;
  complete: boolean;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${
          complete
            ? "border-cyan-400 bg-gradient-to-r from-indigo-500 via-primary-500 to-cyan-500 text-white shadow-[0_14px_40px_rgba(79,70,229,0.24)]"
            : active
              ? "border-cyan-300 bg-white/80 text-primary-600 shadow-[0_10px_30px_rgba(34,211,238,0.18)] dark:bg-white/10 dark:text-cyan-300"
              : "border-white/15 bg-white/70 text-gray-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-500"
        }`}
      >
        {complete ? (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        ) : active ? (
          <span className="h-2.5 w-2.5 rounded-full bg-purple-500 animate-pulse" />
        ) : (
          <span className="h-2.5 w-2.5 rounded-full bg-purple-200" />
        )}
      </div>
      <span
        className={`text-[11px] font-semibold ${
          active || complete ? "text-primary-700 dark:text-cyan-300" : "text-gray-400 dark:text-slate-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
