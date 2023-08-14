import { ContactsHeader } from "@/components/Pages/Contacts/ContactsHeader/ContactsHeader";
import { DrivingDirections } from "@/components/Pages/Contacts/DrivingDirections/DrivingDirections";
import { Dealers } from "@/components/Pages/Contacts/Dealers/Dealers";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты АГРО-ТЕХ",
  description: "Всегда рады видеть вас в нашем офисе",
};

export default function Contacts() {
  return (
    <>
      <ContactsHeader />
      <DrivingDirections />
      <Dealers />
      <CallToAction />
    </>
  );
}
