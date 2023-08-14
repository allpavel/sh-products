import { Hero } from "@/components/Hero/Hero";
import { Cards } from "@/components/Cards/Cards";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Запчасти АГРО-ТЕХ",
  description: "Запчасти и комплектующие на сельхозтехнику",
};

export default async function Spares() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/spares?populate=*&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );
  return (
    <>
      <Hero page="spares" data={cards.data[0].attributes.categoryId.data.attributes} />
      <Cards cards={cards} pathname="/spares" title="Запчасти и комплектующие" />
      <CallToAction />
    </>
  );
}
