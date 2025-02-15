import dynamic from "next/dynamic";
import Spinner from "../components/spinner";
import About from "../components/about";
import Overview from "../components/overview";
import SpeakersSection from "@/components/speaker";
import Sponsor from "@/components/sponsor";
import Gallery from "@/components/gallery";
import Higlight from "@/components/highlight";
import Footer from "@/components/footer";

// Lazy load Herosection dengan Spinner
const Herosection = dynamic(() => import("../components/herosection"), {
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <Spinner />
    </div>
  ),
});

export default function Home() {
  return (
    <div>
      <Herosection />
      <About />
      <Overview />
      <SpeakersSection />
      <Sponsor />
      {/* <Gallery /> */}
      <Higlight />
      <Footer />
    </div>
  );
}
