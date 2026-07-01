import { Benefits } from "../components/Benefits/Benefits";
import { Comparison } from "../components/Comparison/Comparison";
import { EarlyAccessBanner } from "../components/CTA/EarlyAccessBanner";
import { FinalCTA } from "../components/CTA/FinalCTA";
import { FAQ } from "../components/FAQ/FAQ";
import { Features } from "../components/Features/Features";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { HowItWorks } from "../components/HowItWorks/HowItWorks";
import { Navbar } from "../components/Navbar/Navbar";
import { Problems } from "../components/Problems/Problems";
import { ScreensPreview } from "../components/ScreensPreview/ScreensPreview";
import { Solution } from "../components/Solution/Solution";
import { TrustedBy } from "../components/TrustedBy/TrustedBy";

export default function Landing() {
  return (
    <main className="overflow-hidden bg-[#fbfdfc] text-ink">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Problems />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Comparison />
      <Features />
      <ScreensPreview />
      <EarlyAccessBanner />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
