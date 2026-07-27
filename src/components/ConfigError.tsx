import type { EnvironmentConfig } from "../types";

interface ConfigErrorProps {
  config: EnvironmentConfig;
}

export function ConfigError({ config }: ConfigErrorProps) {
  if (config.isValid) return null;

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_26%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_20%),linear-gradient(180deg,#f7f9ff_0%,#eef2ff_50%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.28),transparent_26%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_20%),linear-gradient(180deg,#0b1020_0%,#111827_52%,#0f172a_100%)]" />
      <div className="relative w-full max-w-lg rounded-[1.75rem] border border-white/15 bg-white/75 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100/80 text-2xl text-red-600 shadow-[0_14px_40px_rgba(239,68,68,0.2)] dark:bg-red-900/30 dark:text-red-400">
            ⚠
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-950 dark:text-white">Configuration Error</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Required environment variables are missing.
            </p>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-red-200/80 bg-red-50/80 px-4 py-3 dark:border-red-800 dark:bg-red-900/20">
          <p className="mb-2 text-sm font-semibold text-red-700 dark:text-red-300">Missing variables:</p>
          <ul className="space-y-1">
            {config.missingVars.map((v) => (
              <li key={v} className="font-mono text-xs text-red-600 dark:text-red-400">
                • {v}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/5">
          <p className="mb-2 text-xs font-semibold text-purple-700 dark:text-purple-300">How to fix:</p>
          <ol className="space-y-1 text-xs leading-6 text-gray-600 dark:text-gray-300">
            <li>
              1. Copy <code className="font-semibold text-gray-800 dark:text-gray-200">.env.example</code> to{" "}
              <code className="font-semibold text-gray-800 dark:text-gray-200">.env</code>
            </li>
            <li>2. Fill in the missing values</li>
            <li>3. Restart the development server</li>
          </ol>
        </div>

        <p className="mt-5 text-center text-xs text-gray-500 dark:text-gray-400">
          See <code className="font-medium text-purple-500">README.md</code> for full setup instructions.
        </p>
      </div>
    </div>
  );
}
