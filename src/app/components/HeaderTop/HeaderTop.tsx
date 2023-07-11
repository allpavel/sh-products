import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.jpg";
import angars from "../../../../public/images/angars.jpg";
import award from "../../../../public/images/award.jpg";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import styles from "./HeaderTop.module.css";

export const HeaderTop = () => {
  return (
    <>
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
          <MdEmail className={`${styles.contactsIcon} ${styles.mailIcon}`} />
          <a href="mailto:mail@agro-teh.su" className={styles.mailLink}>
            mail@agro-teh.su
          </a>
        </div>
      </div>
      <div>
        <a href="tel:8-911-124-25-67" className={styles.phone}>
          8-911-124-25-67
        </a>
        <a href="tel:8-921-987-65-43" className={styles.phone}>
          8-921-987-65-43
        </a>
      </div>
    </>
  );
};
