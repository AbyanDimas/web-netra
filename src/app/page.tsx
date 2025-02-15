import dynamic from "next/dynamic";
import Spinner from "./components/spinner";
import About from "./components/about";
import Overview from "./components/overview";

// Lazy load Herosection dengan Spinner
const Herosection = dynamic(() => import("./components/herosection"), {
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
    </div>
  );
}
