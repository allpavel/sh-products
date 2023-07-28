import { CallToAction } from "../components/CallToAction/CallToAction";
import { ServicesBody } from "../components/Pages/Services/ServicesBody/ServicesBody";
import { ServicesHero } from "../components/Pages/Services/ServicesHero/ServicesHero";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesBody />
      <CallToAction />
    </>
  );
}
