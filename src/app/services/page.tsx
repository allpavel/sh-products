import { Cards } from "@/components/Cards/Cards";
import { ServicesContent } from "@/components/Pages/Services/ServicesContent/ServicesContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { Hero } from "@/components/Hero/Hero";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";

export async function generateMetadata() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services?populate=*&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );

  return {
    title: cards.data[0].attributes.categoryId.data.attributes.title,
    description: cards.data[0].attributes.categoryId.data.attributes.metaDescription,
  };
}

export default async function Services() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services?populate=*&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );
  return (
    <>
      <Hero page="services" data={cards.data[0].attributes.categoryId.data.attributes} />
      <Cards cards={cards} pathname="/services" title="Услуги" />
      <ServicesContent />
      <CallToAction />
    </>
  );
}
