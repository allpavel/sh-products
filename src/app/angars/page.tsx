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

export default async function Angars() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/sub-categories?populate=*&filters[categoryId][title][$eq]=Ангары`
  );
  return (
    <>
      <AngarsHero />
      <Cards cards={cards} title="Ангары" pathname="/angars" scrollToTop={false} />
      <AngarsContent />
      <CallToAction />
    </>
  );
}
