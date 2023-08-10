import { Hero } from "@/components/Hero/Hero";
import { Cards } from "@/components/Cards/Cards";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";

export default async function Spares() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/spares?populate=*&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );
  return (
    <>
      <Hero />
      <Cards cards={cards} pathname="/spares" title="Запчасти и комплектующие" />
      <CallToAction />
    </>
  );
}
