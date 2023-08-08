import { Hero } from "@/components/Hero/Hero";
import { BuildSection } from "@/components/BuildSection/BuildSection";
import { ProductSection } from "@/components/ProductSection/ProductSection";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Benefits } from "@/components/Benefits/Benefits";

export default function Home() {
  return (
    <>
      <Hero />
      <BuildSection />
      <ProductSection />
      <CallToAction />
      <AboutUs />
      <Benefits />
    </>
  );
}
