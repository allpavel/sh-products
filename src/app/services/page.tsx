import { ServicesHero } from "@/components/Pages/Services/ServicesHero/ServicesHero";
import { Cards } from "@/components/Cards/Cards";
import { ServicesContent } from "@/components/Pages/Services/ServicesContent/ServicesContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";

export default async function Services() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services?populate=*&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );
  return (
    <>
      <ServicesHero />
      <Cards cards={cards} pathname="/services" title="Услуги" />
      <ServicesContent />
      <CallToAction />
    </>
  );
}
