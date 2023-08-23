import { Hero } from "@/components/Hero/Hero";
import { Cards } from "@/components/Cards/Cards";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { CardSkeleton } from "@/components/CardSkeleton/CardSkeleton";
import { SkeletonContainer } from "@/components/SkeletonContainer/SkeletonContainer";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";

export async function generateMetadata() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/spares?populate=*&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );

  return {
    title: cards.data[0].attributes.categoryId.data.attributes.title,
    description: cards.data[0].attributes.categoryId.data.attributes.metaDescription,
  };
}

export default async function Spares() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/spares?populate=*&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );
  return (
    <>
      <Hero page="spares" data={cards.data[0].attributes.categoryId.data.attributes} />
      <SkeletonContainer>
        <CardSkeleton />
      </SkeletonContainer>
      <Cards cards={cards} pathname="/spares" title="Запчасти и комплектующие" />
      <CallToAction />
    </>
  );
}
