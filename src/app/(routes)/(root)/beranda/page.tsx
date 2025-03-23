import HeroSection from "@/app/components/HeroSection";
import Higlight from "./highlight";
import Overview from "./overview";
import SpeakersSection from "./speaker";
import Footer from "./footer";

export default function beranda() {
  return (
    <div>
      <div className="relative z-1">
      <HeroSection />
      <Higlight />
      <Overview />
      <SpeakersSection />
      <Footer />
      </div>
    </div>
  );
}
