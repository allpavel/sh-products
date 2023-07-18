import { BuildSection } from "./components/BuildSection/BuildSection";
import { CallToAction } from "./components/CallToAction/CallToAction";
import { Hero } from "./components/Hero/Hero";
import { ProductSection } from "./components/ProductSection/ProductSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BuildSection />
      <ProductSection />
      <CallToAction />
    </>
  );
}
