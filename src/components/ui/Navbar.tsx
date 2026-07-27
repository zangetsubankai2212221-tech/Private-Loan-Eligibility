import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/features", label: "Features" },
  { to: "/privacy", label: "Privacy" },
  { to: "/faq", label: "FAQ" },
];

interface NavbarProps {
  walletButton?: ReactNode;
}

export function Navbar({ walletButton }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={[
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/70 dark:bg-slate-950/60 backdrop-blur-2xl border-b border-white/15 dark:border-white/10 shadow-[0_18px_70px_rgba(15,23,42,0.12)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="container-page flex h-18 items-center justify-between py-3 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-primary-600 to-cyan-500 shadow-[0_18px_50px_rgba(79,70,229,0.35)] ring-1 ring-white/20">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-950 dark:text-white">
            Private Loan
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={[
                "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 after:absolute after:inset-x-4 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-cyan-400 after:via-primary-500 after:to-pink-400 after:transition-transform after:duration-300 hover:bg-white/55 hover:text-gray-950 dark:hover:bg-white/8 dark:hover:text-white",
                location.pathname === link.to
                  ? "text-primary-600 bg-white/70 shadow-[0_10px_30px_rgba(79,70,229,0.12)] after:scale-x-100 dark:text-cyan-300 dark:bg-white/8"
                  : "text-gray-600 dark:text-gray-300",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {walletButton}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/70 text-gray-600 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white dark:text-gray-300 dark:bg-white/8 dark:hover:bg-white/12"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          <Link
            to="/launch"
            className="hidden items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-primary-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-[0_18px_50px_rgba(79,70,229,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(79,70,229,0.42)] lg:inline-flex"
          >
            Launch App
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/70 text-gray-600 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white dark:text-gray-300 dark:bg-white/8 dark:hover:bg-white/12 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/15 bg-white/85 px-4 pb-4 pt-4 shadow-[0_18px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/85 lg:hidden">
          <div className="flex flex-col gap-2 rounded-3xl border border-white/15 bg-white/75 p-3 dark:border-white/10 dark:bg-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={[
                  "rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300",
                  location.pathname === link.to
                    ? "bg-gradient-to-r from-indigo-500/15 via-primary-500/15 to-cyan-500/15 text-primary-700 shadow-[0_12px_30px_rgba(79,70,229,0.12)] dark:text-cyan-300"
                    : "text-gray-600 hover:bg-white/70 hover:text-gray-950 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/launch"
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-primary-600 to-cyan-500 px-6 py-3 text-center font-semibold text-white shadow-[0_18px_50px_rgba(79,70,229,0.35)] transition-all hover:-translate-y-0.5"
            >
              Launch App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
