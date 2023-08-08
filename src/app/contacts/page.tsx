import { ContactsHeader } from "@/components/Pages/Contacts/ContactsHeader/ContactsHeader";
import { DrivingDirections } from "@/components/Pages/Contacts/DrivingDirections/DrivingDirections";
import { Dealers } from "@/components/Pages/Contacts/Dealers/Dealers";
import { CallToAction } from "@/components/CallToAction/CallToAction";

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
