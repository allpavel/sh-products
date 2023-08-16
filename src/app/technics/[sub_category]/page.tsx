import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import { Hero } from "@/components/Hero/Hero";
import { Cards } from "@/components/Cards/Cards";
import { TechnicsContent } from "@/components/Pages/Technics/TechnicsContent/TechnicsContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";

export async function generateStaticParams() {
  const response: CardsSchema = await getData(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/technics?populate=*`);
  return response.data.map((item) => ({
    slug: item.attributes.slug,
    sub_category: item.attributes.sub_category.data.attributes.slug,
  }));
}

export async function generateMetadata({ params }: { params: { sub_category: string } }) {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/technics?populate=*&filters[sub_category][slug][$eq]=${params.sub_category}&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );

  return {
    title: cards.data[0].attributes.sub_category.data.attributes.title,
    description: cards.data[0].attributes.sub_category.data.attributes.metaDescription,
  };
}

export default async function TechnicsCards({ params }: { params: { sub_category: string } }) {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/technics?populate=*&filters[sub_category][slug][$eq]=${params.sub_category}&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );
  return (
    <>
      <Hero page={params.sub_category} data={cards.data[0].attributes.sub_category.data.attributes} />
      <Breadcrumbs card={cards.data[0]} />
      <Cards
        cards={cards}
        title={cards.data[0].attributes.sub_category.data.attributes.title}
        pathname={`/technics/${params.sub_category}`}
      />
      <TechnicsContent />
      <CallToAction />
    </>
  );
}
