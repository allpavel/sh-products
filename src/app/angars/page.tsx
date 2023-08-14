import { Hero } from "@/components/Hero/Hero";
import { Cards } from "@/components/Cards/Cards";
import { AngarsContent } from "@/components/Pages/Angars/AngarsContent/AngarsContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import type { Metadata } from "next";
import { CardsSchema } from "@/types/types";

export const metadata: Metadata = {
  title: "Ангары АГРО-ТЕХ",
  description: "Строительство ангаров, быстровозводимых металлических сооружений",
};

export default async function Angars() {
  const cards: CardsSchema = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/sub-categories?populate=*&filters[categoryId][title][$eq]=Ангары`
  );
  return (
    <>
      <Hero page="angars" data={cards.data[0].attributes.categoryId.data.attributes} />
      <Cards cards={cards} title="Ангары" pathname="/angars" scrollToTop={false} />
      <AngarsContent />
      <CallToAction />
    </>
  );
}
