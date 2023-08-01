import { CallToAction } from "../components/CallToAction/CallToAction";
import { AngarsContent } from "../components/Pages/Angars/AngarsContent/AngarsContent";
import { AngarsHero } from "../components/Pages/Angars/AngarsHero/AngarsHero";

export default function Angars() {
  return (
    <>
      <AngarsHero />
      <AngarsContent />
      <CallToAction />
    </>
  );
}
