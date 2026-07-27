import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { FadeIn } from "../components/ui/Animations";

export function CTA() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.16),transparent_24%)]" />
      <div className="container-page">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(135deg,rgba(79,70,229,0.95),rgba(37,99,235,0.92),rgba(14,165,233,0.88))] px-8 py-16 text-center shadow-[0_30px_100px_rgba(37,99,235,0.28)] lg:px-20 lg:py-20">
            <div className="absolute inset-0 -z-10">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-pink-400/20 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_42%)] opacity-80" />
            </div>

            <h2 className="text-section font-semibold tracking-tight text-white">
              Ready to verify your eligibility?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/85">
              Connect your wallet, enter your financial details, and get a zero-knowledge 
              proof of eligibility — all without exposing your private data.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/launch"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary-700 shadow-[0_18px_50px_rgba(15,23,42,0.16)] transition-all hover:-translate-y-0.5 hover:bg-white/95"
              >
                Launch Application
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link to="/privacy">
                <Button size="lg" variant="ghost" className="!text-white !font-medium hover:!bg-white/10 hover:!text-white">
                  How We Protect Your Data
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
