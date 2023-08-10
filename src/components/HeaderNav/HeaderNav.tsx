"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MdArrowDropDown, MdArrowDropUp, MdArrowLeft, MdMenu, MdClose } from "react-icons/md";
import styles from "./HeaderNav.module.css";

export const HeaderNav = () => {
  const [isOurWorksMenuOpen, setIsOurWorksMenuOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const nestedMenuRef = useRef<HTMLUListElement>(null);

  const handleOurWorksMenuMenu = (): void => {
    setIsOurWorksMenuOpen((prev) => !prev);
  };

  const handleOpenMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
    document.body.style.overflow = isMobileOpen ? "" : "hidden";
    if (isOurWorksMenuOpen) {
      setIsOurWorksMenuOpen(false);
    }
  };

  const closeMenu = () => {
    document.body.style.overflow = "";
    setIsOurWorksMenuOpen(false);
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (nestedMenuRef.current && isOurWorksMenuOpen && !nestedMenuRef.current.contains(event.target as Node)) {
        setIsMobileOpen(false);
        setIsOurWorksMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOurWorksMenuOpen]);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <button className={styles.contactsMenu} onClick={handleOpenMobileMenu}>
          {isMobileOpen ? <MdClose /> : <MdMenu />}
        </button>
        <ul className={`${styles.navLinks} ${isMobileOpen ? "" : styles.closeContacts}`}>
          <li>
            <Link href="/angars" className={styles.link} onClick={closeMenu}>
              Ангары
            </Link>
          </li>
          <li>
            <Link href="/technics" className={styles.link} onClick={closeMenu}>
              Сельхозтехника
            </Link>
          </li>
          <li>
            <Link href="/spares" className={styles.link} onClick={closeMenu}>
              Запчасти
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.link} onClick={closeMenu}>
              Услуги
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link} onClick={closeMenu}>
              О компании
            </Link>
          </li>
          <li>
            <Link href="/contacts" className={styles.link} onClick={closeMenu}>
              Контакты
            </Link>
          </li>
          <li className={styles.dropDownContainer}>
            <button className={`${styles.link} ${styles.arrow}`} onClick={handleOurWorksMenuMenu}>
              Наши работы {isOurWorksMenuOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </button>
            <ul className={`${styles.dropDownContent} ${isOurWorksMenuOpen ? styles.open : ""}`} ref={nestedMenuRef}>
              <li className={styles.firstItems}>
                <button className={styles.backArrow} onClick={handleOurWorksMenuMenu}>
                  <MdArrowLeft />
                  Назад
                </button>
              </li>
              <div onClick={closeMenu}>
                <li>
                  <Link href="/angars/angary-beskarkasnye" className={styles.link}>
                    Ангары бескаркасные
                  </Link>
                </li>
                <li>
                  <Link href="/angars/tentovye-angary" className={styles.link}>
                    Тентовые ангары
                  </Link>
                </li>
                <li>
                  <Link href="/angars/karkasnye-angary/toka-karkasanye-navesy" className={styles.link}>
                    Навесы и тока
                  </Link>
                </li>
                <li>
                  <Link href="/angars/angary-beskarkasnye/aviaczionnye-angary" className={styles.link}>
                    Авиационные ангары
                  </Link>
                </li>
                <li>
                  <Link href="/angars/karkasnye-angary" className={styles.link}>
                    Каркасные ангары
                  </Link>
                </li>
                <li>
                  <Link href="/technics/borony" className={styles.link}>
                    Бороны
                  </Link>
                </li>
                <li>
                  <Link href="/technics/razbrasyvateli-udobrenij" className={styles.link}>
                    Разбрасыватели удобрений
                  </Link>
                </li>
                <li>
                  <Link href="/technics/opryskivateli" className={styles.link}>
                    Опрыскиватели
                  </Link>
                </li>
                <li>
                  <Link href="/technics/prochaya-selhoztehnika" className={styles.link}>
                    Прочая сельхозтехника
                  </Link>
                </li>
                <li>
                  <Link href="/spares" className={styles.link}>
                    Запчасти и комплектующие
                  </Link>
                </li>
                <li>
                  <Link href="/services" className={styles.link}>
                    Услуги
                  </Link>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
