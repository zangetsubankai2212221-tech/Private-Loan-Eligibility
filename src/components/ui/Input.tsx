import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, className = "", id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-2">
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={[
            "h-14 w-full rounded-2xl border border-white/15 bg-white/78 px-4 text-base text-gray-900 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl",
            "placeholder:text-gray-400/90 transition-all duration-300",
            "focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40",
            error
              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
              : "hover:border-white/25 dark:border-white/10 dark:bg-slate-950/60 dark:text-gray-100",
            className,
          ].join(" ")}
          {...props}
        />
        {helperText && !error && (
          <p className="text-xs leading-6 text-gray-500 dark:text-gray-400">{helperText}</p>
        )}
        {error && (
          <p className="text-xs leading-6 text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
