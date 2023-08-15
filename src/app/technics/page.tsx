import { Cards } from "@/components/Cards/Cards";
import { TechnicsContent } from "@/components/Pages/Technics/TechnicsContent/TechnicsContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";
import { Hero } from "@/components/Hero/Hero";

export async function generateMetadata() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/sub-categories?populate=*&filters[categoryId][title][$eq]=Сельхозтехника`
  );

  return {
    title: cards.data[0].attributes.categoryId.data.attributes.title,
    description: cards.data[0].attributes.categoryId.data.attributes.metaDescription,
  };
}

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
