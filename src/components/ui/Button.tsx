import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-indigo-500 via-primary-600 to-cyan-500 text-white shadow-[0_18px_50px_rgba(79,70,229,0.35)] hover:shadow-[0_22px_70px_rgba(79,70,229,0.42)] active:scale-[0.98]",
  secondary:
    "border border-white/15 bg-white/80 text-gray-800 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl hover:bg-white hover:border-white/25 active:scale-[0.98] dark:border-white/10 dark:bg-slate-900/60 dark:text-gray-100",
  ghost:
    "text-gray-600 hover:text-gray-900 hover:bg-white/70 active:bg-white/90 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/8",
  danger:
    "bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-[0_18px_50px_rgba(244,63,94,0.28)] hover:shadow-[0_20px_60px_rgba(244,63,94,0.34)] active:scale-[0.98]",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-10 px-4 text-sm rounded-full gap-1.5",
  md: "h-12 px-6 text-sm font-medium rounded-full gap-2",
  lg: "h-14 px-8 text-base font-semibold rounded-full gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, disabled, className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={[
          "inline-flex items-center justify-center transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      >
        {loading && (
          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
