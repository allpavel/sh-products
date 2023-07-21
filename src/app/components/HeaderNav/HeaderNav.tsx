"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MdArrowDropDown, MdArrowDropUp, MdArrowLeft, MdMenu, MdClose } from "react-icons/md";
import styles from "./HeaderNav.module.css";

export const HeaderNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLUListElement>(null);
  const nestedMenuRef = useRef<HTMLUListElement>(null);

  const handleDropdownMenu = (): void => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOpenMobileMenu = () => {
    document.body.style.overflow = isMobileOpen ? "" : "hidden";
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
    setIsMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (nestedMenuRef.current && isDropdownOpen && !nestedMenuRef.current.contains(event.target as Node)) {
        setIsMobileOpen(false);
        setIsDropdownOpen(false);
        document.body.style.overflow = "";
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.contactsMenu} onClick={handleOpenMobileMenu}>
          {isMobileOpen ? <MdClose /> : <MdMenu />}
        </div>
        <ul className={`${styles.navLinks} ${isMobileOpen ? "" : styles.closeContacts}`} ref={mobileMenuRef}>
          <li>
            <Link href="#" className={styles.link} onClick={handleOpenMobileMenu}>
              Ангары
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link} onClick={handleOpenMobileMenu}>
              Сельхозтехника
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link} onClick={handleOpenMobileMenu}>
              Запчасти
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link} onClick={handleOpenMobileMenu}>
              Услуги
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link} onClick={handleOpenMobileMenu}>
              О компании
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link} onClick={handleOpenMobileMenu}>
              Контакты
            </Link>
          </li>
          <li className={styles.dropDownContainer}>
            <Link href="#" className={`${styles.link} ${styles.arrow}`} ref={dropdownRef} onClick={handleDropdownMenu}>
              Наши работы {isDropdownOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </Link>
            <ul className={`${styles.dropDownContent} ${isDropdownOpen ? styles.open : ""}`} ref={nestedMenuRef}>
              <li className={styles.firstItems}>
                <Link href="#" className={`${styles.backArrow}`} data-back="back" onClick={handleDropdownMenu}>
                  <MdArrowLeft />
                  Назад
                </Link>
              </li>
              <div onClick={handleOpenMobileMenu}>
                <li>
                  <Link href="#" className={styles.link}>
                    Ангары бескаркасные
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.link}>
                    Тентовые ангары
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.link}>
                    Навесы и тока
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.link}>
                    Авиационные ангары
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.link}>
                    Каркасные ангары
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.link}>
                    Бороны
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.link}>
                    Разбрасыватели удобрений
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.link}>
                    Опрыскиватели
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.link}>
                    Прочая сельхозтехника
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.link}>
                    Запчасти и комплектующие
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.link}>
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
