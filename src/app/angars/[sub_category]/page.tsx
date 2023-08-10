import { AngarsHero } from "@/components/Pages/Angars/AngarsHero/AngarsHero";
import { Cards } from "@/components/Cards/Cards";
import { AngarsContent } from "@/components/Pages/Angars/AngarsContent/AngarsContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";

export default async function AngarCards({ params }: { params: { sub_category: string } }) {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/angars?populate=*&filters[sub_category][slug][$eq]=${params.sub_category}&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );
  return (
    <>
      <AngarsHero />
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
