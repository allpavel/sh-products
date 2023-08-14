import { Hero } from "@/components/Pages/Main/Hero/Hero";
import { BuildSection } from "@/components/BuildSection/BuildSection";
import { ProductSection } from "@/components/ProductSection/ProductSection";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Benefits } from "@/components/Benefits/Benefits";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "АГРО-ТЕХ — Ангары и сельхозтехника от производителя",
  description: "Производство сельскохозяйственной техники и строительство ангаров",
};

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
