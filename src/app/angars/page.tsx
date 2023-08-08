import { CallToAction } from "@/components/CallToAction/CallToAction";
import { Cards } from "@/components/Cards/Cards";
import { AngarsHero } from "@/components/Pages/Angars/AngarsHero/AngarsHero";
import { AngarsContent } from "@/components/Pages/Angars/AngarsContent/AngarsContent";

export default function Angars() {
  return (
    <>
      <AngarsHero />
      <Cards pathname="/angars" />
      <AngarsContent />
      <CallToAction />
    </>
  );
}
