"use client";

import Link from "next/link";
import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail, MdMenu, MdClose } from "react-icons/md";
import { Button } from "../Button/Button";
import { montserrat } from "@/app/layout";
import logo from "../../../../public/images/logo.jpg";
import angars from "../../../../public/images/angars.jpg";
import award from "../../../../public/images/award.jpg";
import styles from "./HeaderTop.module.css";
import { useState, useEffect, useRef } from "react";

export const HeaderTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (menuRef.current && isOpen && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={`${styles.container} ${montserrat.className}`}>
      <div>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Логотип Агро-Тех" width={106} height={67} className={styles.logoImage} />
          <Image
            src={angars}
            alt="Ангары и сельхозтехника от производителя"
            width={142}
            height={57}
            className={styles.angars}
          />
        </Link>
      </div>
      <div onClick={handleOpenMenu} className={styles.contactsMenu}>
        {isOpen ? <MdClose /> : <MdMenu />}
      </div>
      <div className={`${styles.contactsContainer} ${isOpen ? "" : styles.closeContacts}`} ref={menuRef}>
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
        <div className={styles.phoneContainer}>
          <a href="tel:8-911-124-25-67" className={styles.phone}>
            8-911-124-25-67
          </a>
          <a href="tel:8-921-987-65-43" className={styles.phone}>
            8-921-987-65-43
          </a>
        </div>
        <Button text="Заказать звонок" type="red" size="large" />
      </div>
    </div>
  );
};
