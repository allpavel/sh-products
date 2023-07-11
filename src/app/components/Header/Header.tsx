import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../../../../public/images/logo.jpg";
import angars from "../../../../public/images/angars.jpg";
import award from "../../../../public/images/award.jpg";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { montserrat } from "@/app/layout";

export const Header = () => {
  return (
    <header className={`${styles.container} ${montserrat.className}`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="Логотип Агро-Тех" width={106} height={67} className={styles.logoImage} />
          <Image src={angars} alt="Ангары и сельхозтехника от производителя" width={142} height={57} />
        </Link>
      </div>
      <div className={styles.headerAward}>
        <Image src={award} alt="" width={48} height={48} className={styles.awardImage} />
        <p className={styles.awardText}>Качество и приемлемая цена</p>
      </div>
      <div>
        <div className={styles.contacts}>
          <RiWhatsappFill className={`${styles.contactsIcon} ${styles.whatsAppIcon}`} />
          <p>WhatsApp</p>
        </div>
        <div className={styles.contacts}>
          <MdEmail className={styles.contactsIcon} />
          <a href="mailto:mail@agro-teh.su">mail@agro-teh.su</a>
        </div>
      </div>
    </header>
  );
};
