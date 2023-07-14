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

  if (mobileMenuRef.current) {
    mobileMenuRef.current.style.overflowY = isDropdownOpen ? "hidden" : "";
  }

  const handleDropdownMenu = (event: React.MouseEvent<HTMLLIElement>): void => {
    event.stopPropagation();

    if (nestedMenuRef.current) {
      nestedMenuRef.current.scrollTop = 0;
    }
    if (dropdownRef.current && isDropdownOpen && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    } else {
      setIsDropdownOpen((prev) => !prev);
    }
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
      if (mobileMenuRef.current && isMobileOpen && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileOpen]);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.contactsMenu} onClick={handleOpenMobileMenu}>
          {isMobileOpen ? <MdClose /> : <MdMenu />}
        </div>
        <ul className={`${styles.navLinks} ${isMobileOpen ? "" : styles.closeContacts}`} ref={mobileMenuRef}>
          <li>
            <Link href="#" className={styles.link}>
              Ангары
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link}>
              Сельхозтехника
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link}>
              Запчасти
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link}>
              Услуги
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link}>
              О компании
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.link}>
              Контакты
            </Link>
          </li>
          <li onClick={handleDropdownMenu} className={styles.dropDownContainer}>
            <Link href="#" className={`${styles.link} ${styles.arrow}`} ref={dropdownRef}>
              Наши работы {isDropdownOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </Link>
            <ul className={`${styles.dropDownContent} ${isDropdownOpen ? styles.open : ""}`} ref={nestedMenuRef}>
              <li>
                <Link href="#" className={`${styles.backArrow}`}>
                  <MdArrowLeft />
                  Назад
                </Link>
              </li>
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
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
