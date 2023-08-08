import { Hero } from "@/components/Hero/Hero";
import { Cards } from "@/components/Cards/Cards";
import { CallToAction } from "@/components/CallToAction/CallToAction";

export default function Spares() {
  return (
    <>
      <Hero />
      <Cards pathname="/spares" />
      <CallToAction />
    </>
  );
}
