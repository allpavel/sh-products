import { TechnicsHero } from "@/components/Pages/Technics/TechnicsHero/TechnicsHero";
import { Cards } from "@/components/Cards/Cards";
import { TechnicsContent } from "@/components/Pages/Technics/TechnicsContent/TechnicsContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";

export default function Technics() {
  return (
    <>
      <TechnicsHero />
      <Cards pathname="/technics" title="Сельхозтехника" />
      <TechnicsContent />
      <CallToAction />
    </>
  );
}
