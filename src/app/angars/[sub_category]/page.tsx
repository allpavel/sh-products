import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import { Cards } from "@/components/Cards/Cards";
import { AngarsContent } from "@/components/Pages/Angars/AngarsContent/AngarsContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";
import { Hero } from "@/components/Hero/Hero";

export async function generateMetadata({ params }: { params: { sub_category: string } }) {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/angars?populate=*&filters[sub_category][slug][$eq]=${params.sub_category}&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );

  return {
    title: cards.data[0].attributes.sub_category.data.attributes.title,
    description: cards.data[0].attributes.sub_category.data.attributes.metaDescription,
  };
}

export default async function AngarCards({ params }: { params: { sub_category: string } }) {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/angars?populate=*&filters[sub_category][slug][$eq]=${params.sub_category}&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );
  return (
    <>
      <Hero page={params.sub_category} data={cards.data[0].attributes.sub_category.data.attributes} />
      <Breadcrumbs card={cards.data[0]} />
      <Cards
        cards={cards}
        title={cards.data[0].attributes.sub_category.data.attributes.title}
        pathname={`/angars/${params.sub_category}`}
      />
      <AngarsContent />
      <CallToAction />
    </>
  );
}
