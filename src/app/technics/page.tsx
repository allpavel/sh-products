import { CallToAction } from "../components/CallToAction/CallToAction";
import { Cards } from "../components/Cards/Cards";
import { TechnicsContent } from "../components/Pages/Technics/TechnicsContent/TechnicsContent";
import { TechnicsHero } from "../components/Pages/Technics/TechnicsHero/TechnicsHero";

export default function Technics() {
  return (
    <>
      <TechnicsHero />
      <Cards pathname="/technics" />
      <TechnicsContent />
      <CallToAction />
    </>
  );
}
