import { AngarsHero } from "@/components/Pages/Angars/AngarsHero/AngarsHero";
import { Cards } from "@/components/Cards/Cards";
import { AngarsContent } from "@/components/Pages/Angars/AngarsContent/AngarsContent";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { getData } from "@/utils/getData";
import { CardsSchema } from "@/types/types";
import type { Metadata } from "next";

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
      <AngarsHero />
      <Cards cards={cards} title="Ангары" pathname="/angars" scrollToTop={false} />
      <AngarsContent />
      <CallToAction />
    </>
  );
}
