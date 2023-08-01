import { CallToAction } from "../components/CallToAction/CallToAction";
import { TechnicsCards } from "../components/Pages/Technics/TechnicsCards/TechnicsCards";
import { TechnicsContent } from "../components/Pages/Technics/TechnicsContent/TechnicsContent";
import { TechnicsHero } from "../components/Pages/Technics/TechnicsHero/TechnicsHero";

export default function Technics() {
  return (
    <>
      <TechnicsHero />
      <TechnicsCards />
      <TechnicsContent />
      <CallToAction />
    </>
  );
}
