import { CallToAction } from "@/components/CallToAction/CallToAction";
import { Cards } from "@/components/Cards/Cards";
import { AngarsHero } from "@/components/Pages/Angars/AngarsHero/AngarsHero";
import { AngarsContent } from "@/components/Pages/Angars/AngarsContent/AngarsContent";
import { getData } from "@/utils/getData";

interface Card {
  id: number;
  attributes: {
    title: string;
    cover: {
      data: {
        attributes: {
          alternativeText: string;
          formats: {
            thumbnail: {
              url: string;
            };
          };
          url: string;
        };
      };
    };
    sub_category: {
      data: {
        id: number;
        attributes: {
          title: string;
        };
      };
    };
    price?: string;
    slug: string;
  };
}

interface CardsSchema {
  data: Card[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

export default async function AngarCards({ params }: { params: { sub_category: string } }) {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/angars?populate=*&filters[sub_category][slug][$eq]=${params.sub_category}`
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
