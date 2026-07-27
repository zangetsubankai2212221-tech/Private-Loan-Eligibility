import { type HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered";
  padding?: "none" | "sm" | "md" | "lg";
}

const variantClasses = {
  default: "border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,250,252,0.74))] shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(15,23,42,0.64))]",
  elevated: "border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.84))] shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(15,23,42,0.72))]",
  bordered: "border border-transparent bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.82))_padding-box,linear-gradient(135deg,rgba(99,102,241,0.38),rgba(34,211,238,0.28),rgba(236,72,153,0.24))_border-box] shadow-[0_22px_72px_rgba(79,70,229,0.12)] dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(15,23,42,0.68))_padding-box,linear-gradient(135deg,rgba(99,102,241,0.38),rgba(34,211,238,0.28),rgba(236,72,153,0.24))_border-box]",
};

const paddingClasses = {
  none: "",
  sm: "p-6",
  md: "p-8",
  lg: "p-10",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", padding = "md", className = "", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["rounded-[1.75rem] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_28px_90px_rgba(79,70,229,0.12)]", variantClasses[variant], paddingClasses[padding], className].join(" ")}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
