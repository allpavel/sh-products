import { CallToAction } from "../components/CallToAction/CallToAction";
import { Hero } from "../components/Pages/Spares/Hero/Hero";
import { SparesCards } from "../components/Pages/Spares/SpareCards/SpareCards";

export default function Spares() {
  return (
    <>
      <Hero />
      <SparesCards />
      <CallToAction />
    </>
  );
}
