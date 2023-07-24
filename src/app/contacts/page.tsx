import { CallToAction } from "../components/CallToAction/CallToAction";
import { ContactsHeader } from "../components/Pages/Contacts/ContactsHeader/ContactsHeader";
import { Dealers } from "../components/Pages/Contacts/Dealers/Dealers";
import { DrivingDirections } from "../components/Pages/Contacts/DrivingDirections/DrivingDirections";

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
