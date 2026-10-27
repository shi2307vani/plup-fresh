import SplashLoader from "./components/SplashLoader";
import StallNav from "./components/StallNav";
import BottleWallHero from "./components/BottleWallHero";
import PressMarquee from "./components/PressMarquee";
import PourEdge from "./components/PourEdge";
import FlavourStage from "./components/FlavourStage";
import MixCrate from "./components/MixCrate";
import ProductWheel from "./components/ProductWheel";
import FarmLedger from "./components/FarmLedger";
import CartonBars from "./components/CartonBars";
import CleansePlans from "./components/CleansePlans";
import FridgeNotes from "./components/FridgeNotes";
import StallFooter from "./components/StallFooter";
import OrangeTraveller from "./components/OrangeTraveller";
import { Slat } from "./components/bits";

/** ADLER BEVERAGES · Functional Elixirs · "Market Crate": kraft paper, crates and chalk, with full-colour flavour bands. */
export default function Page() {
  return (
    <>
      <SplashLoader />
      <StallNav />
      <main className="pf-page">
        <BottleWallHero />
        <PressMarquee />
        <PourEdge color="var(--pf-band, #E9741C)" />
        <FlavourStage />
        <Slat />
        <MixCrate />
        <ProductWheel />
        <Slat />
        <FarmLedger />
        <PourEdge color="#24302A" />
        <CartonBars />
        <Slat />
        <CleansePlans />
        <PourEdge color="#FBF6EC" />
        <FridgeNotes />
      </main>
      <StallFooter />
      <OrangeTraveller />
    </>
  );
}
