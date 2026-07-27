import { Hero } from "../sections/Hero";
import { Features } from "../sections/Features";
import { HowItWorks } from "../sections/HowItWorks";
import { Stats } from "../sections/Stats";
import { Privacy } from "../sections/Privacy";
import { FAQ } from "../sections/FAQ";
import { CTA } from "../sections/CTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Privacy />
      <FAQ />
      <CTA />
    </>
  );
}
