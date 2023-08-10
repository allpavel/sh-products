import { TechnicsHero } from "@/components/Pages/Technics/TechnicsHero/TechnicsHero";
import { Cards } from "@/components/Cards/Cards";
import { TechnicsContent } from "@/components/Pages/Technics/TechnicsContent/TechnicsContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";

export default async function Technics() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/sub-categories?populate=*&filters[categoryId][title][$eq]=Сельхозтехника`
  );
  return (
    <>
      <TechnicsHero />
      <Cards cards={cards} pathname="/technics" title="Сельхозтехника" />
      <TechnicsContent />
      <CallToAction />
    </>
  );
}
