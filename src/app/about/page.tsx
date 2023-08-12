import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Benefits } from "@/components/Benefits/Benefits";
import { Description } from "@/components/Pages/About/Description/Description";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании АГРО-ТЕХ",
  description:
    "АГРО-ТЕХ это успешно развивающаяся компания с внушительным опытом работы в производственной и строительной сфере",
};

export default function About() {
  return (
    <>
      <AboutUs />
      <Description />
      <Benefits />
    </>
  );
}
