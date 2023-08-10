import { AngarsHero } from "@/components/Pages/Angars/AngarsHero/AngarsHero";
import { Cards } from "@/components/Cards/Cards";
import { TechnicsContent } from "@/components/Pages/Technics/TechnicsContent/TechnicsContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";

export default async function AngarCards({ params }: { params: { sub_category: string } }) {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/technics?populate=*&filters[sub_category][slug][$eq]=${params.sub_category}`
  );
  return (
    <>
      <AngarsHero />
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
