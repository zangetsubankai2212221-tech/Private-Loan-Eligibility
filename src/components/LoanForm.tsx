import { useState } from "react";
import type { LoanFormData, TransactionState } from "../types";

interface LoanFormProps {
  transactionState: TransactionState;
  onSubmit: (data: LoanFormData) => void;
  disabled: boolean;
}

export function LoanForm({ transactionState, onSubmit, disabled }: LoanFormProps) {
  const [income, setIncome] = useState<string>("");
  const [creditScore, setCreditScore] = useState<string>("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const isBusy = transactionState !== "idle";

  function validate(): boolean {
    const inc = Number(income);
    const cs = Number(creditScore);

    if (!income || income.trim() === "") {
      setValidationError("Annual income is required.");
      return false;
    }
    if (isNaN(inc) || inc < 0) {
      setValidationError("Annual income must be a positive number.");
      return false;
    }
    if (inc > 10_000_000) {
      setValidationError("Annual income seems unreasonably high. Please verify.");
      return false;
    }

    if (!creditScore || creditScore.trim() === "") {
      setValidationError("Credit score is required.");
      return false;
    }
    if (isNaN(cs) || cs < 0) {
      setValidationError("Credit score must be a positive number.");
      return false;
    }
    if (cs > 850) {
      setValidationError("Credit score cannot exceed 850.");
      return false;
    }

    setValidationError(null);
    return true;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ income: Number(income), creditScore: Number(creditScore) });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="income"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Annual Income ($)
        </label>
        <input
          id="income"
          type="number"
          min={0}
          max={10_000_000}
          step={1000}
          placeholder="e.g. 75000"
          value={income}
          onChange={(e) => {
            setIncome(e.target.value);
            setValidationError(null);
          }}
          disabled={isBusy}
          className="w-full rounded-2xl border border-white/15 bg-white/78 px-4 py-3.5 text-gray-900 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/35 disabled:opacity-50 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-gray-500"
        />
      </div>

      <div>
        <label
          htmlFor="creditScore"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Credit Score
        </label>
        <input
          id="creditScore"
          type="number"
          min={0}
          max={850}
          step={1}
          placeholder="e.g. 720"
          value={creditScore}
          onChange={(e) => {
            setCreditScore(e.target.value);
            setValidationError(null);
          }}
          disabled={isBusy}
          className="w-full rounded-2xl border border-white/15 bg-white/78 px-4 py-3.5 text-gray-900 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/35 disabled:opacity-50 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-gray-500"
        />
      </div>

      {validationError && (
        <div className="rounded-2xl border border-red-200/80 bg-red-50/80 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">
          {validationError}
        </div>
      )}

      <div className="rounded-2xl border border-white/15 bg-white/70 px-5 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <div className="flex items-start gap-2.5">
          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
            Your income and credit score are used <strong className="text-gray-800 dark:text-white">only</strong>{" "}
            to generate a zero-knowledge proof locally in your browser. Raw values are{" "}
            <strong className="text-gray-800 dark:text-white">never</strong> transmitted to the Midnight Network.
            Only the final "Eligible / Not Eligible" result is recorded on-chain.
          </p>
        </div>
      </div>

      <button
        type="submit"
        disabled={disabled || isBusy}
        className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-primary-600 to-cyan-500 py-3.5 font-semibold text-white shadow-[0_18px_50px_rgba(79,70,229,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(79,70,229,0.42)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isBusy ? "Processing…" : "Evaluate Eligibility"}
      </button>
    </form>
  );
}
