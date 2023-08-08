import { ServicesHero } from "@/components/Pages/Services/ServicesHero/ServicesHero";
import { ServicesBody } from "@/components/Pages/Services/ServicesBody/ServicesBody";
import { CallToAction } from "@/components/CallToAction/CallToAction";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesBody />
      <CallToAction />
    </>
  );
}
