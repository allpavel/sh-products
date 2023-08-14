import { Cards } from "@/components/Cards/Cards";
import { TechnicsContent } from "@/components/Pages/Technics/TechnicsContent/TechnicsContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero/Hero";

export const metadata: Metadata = {
  title: "Сельхозтехника АГРО-ТЕХ",
  description: "Производим оборудование и машины, которые пользуются неизменно высоким спросом у сельхозпроизводителей",
};

export default async function Technics() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/sub-categories?populate=*&filters[categoryId][title][$eq]=Сельхозтехника`
  );
  return (
    <>
      <Hero page="technics" data={cards.data[0].attributes.categoryId.data.attributes} />
      <Cards cards={cards} pathname="/technics" title="Сельхозтехника" />
      <TechnicsContent />
      <CallToAction />
    </>
  );
}
