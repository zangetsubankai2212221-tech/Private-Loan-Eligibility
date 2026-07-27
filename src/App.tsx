import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { AppLayout } from "./layouts/AppLayout";

const HomePage = lazy(() => import("./pages/Home").then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./pages/About").then(m => ({ default: m.AboutPage })));
const HowItWorksPage = lazy(() => import("./pages/HowItWorks").then(m => ({ default: m.HowItWorksPage })));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage").then(m => ({ default: m.FeaturesPage })));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage").then(m => ({ default: m.PrivacyPage })));
const FAQPage = lazy(() => import("./pages/FAQPage").then(m => ({ default: m.FAQPage })));
const LaunchAppPage = lazy(() => import("./pages/LaunchApp").then(m => ({ default: m.LaunchAppPage })));

function LoadingFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary-200 border-t-primary-600" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Marketing pages with navbar + footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Route>

          {/* App page with navbar only */}
          <Route element={<AppLayout />}>
            <Route path="/launch" element={<LaunchAppPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
