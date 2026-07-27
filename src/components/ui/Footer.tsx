import { Link } from "react-router-dom";

type FooterLink = { label: string; to: string; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { label: "How It Works", to: "/how-it-works" },
    { label: "Features", to: "/features" },
    { label: "Launch App", to: "/launch" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Privacy", to: "/privacy" },
    { label: "FAQ", to: "/faq" },
  ],
  Resources: [
    { label: "Documentation", to: "/how-it-works" },
    { label: "Midnight Network", to: "https://midnight.network", external: true },
    { label: "Lace Wallet", to: "https://lace.io", external: true },
    { label: "GitHub", to: "https://github.com/midnight-network", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/75 backdrop-blur-xl dark:bg-slate-950/60">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-primary-600 to-cyan-500 shadow-[0_18px_50px_rgba(79,70,229,0.35)]">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-tight text-gray-950 dark:text-white">Private Loan</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600 dark:text-gray-300">
              Privacy-preserving loan eligibility verification powered by zero-knowledge proofs on the Midnight Network.
              Your financial data stays yours.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Powered by Midnight Network
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-gray-950 dark:text-white">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-cyan-300"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-cyan-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Private Loan Eligibility. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">Built with Compact ZK Proofs</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">|</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Midnight Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
