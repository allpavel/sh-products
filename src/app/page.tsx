import { BuildSection } from "./components/BuildSection/BuildSection";
import { Hero } from "./components/Hero/Hero";
import { ProductSection } from "./components/ProductSection/ProductSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BuildSection />
      <ProductSection />
    </>
  );
}
