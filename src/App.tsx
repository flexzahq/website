import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Landing from "./pages/Landing";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash.replace("#", "") || "landing");

  useEffect(() => {
    const updateRoute = () => {
      const nextRoute = window.location.hash.replace("#", "") || "landing";
      setRoute(nextRoute);
    };

    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  if (route === "about") return <AboutPage />;
  if (route === "contact") return <ContactPage />;
  if (route === "privacy-policy") return <PrivacyPolicyPage />;
  if (route === "terms-of-service") return <TermsPage />;

  return <Landing />;
}
