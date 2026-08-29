import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ScrollToHash } from "./components/seo/ScrollToHash";
import { SeoManager } from "./components/seo/SeoManager";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Landing from "./pages/Landing";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import ThankYouPage from "./pages/ThankYouPage";

const legacyHashPages: Record<string, string> = {
  about: "/about",
  contact: "/contact",
  "privacy-policy": "/privacy-policy",
  "terms-of-service": "/terms-of-service",
  "thank-you": "/thank-you",
  landing: "/",
  top: "/",
};

function LegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const next = legacyHashPages[hash];
    if (next) {
      navigate(next, { replace: true });
    }
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <SeoManager />
      <ScrollToHash />
      <LegacyHashRedirect />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
