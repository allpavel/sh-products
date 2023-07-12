"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import styles from "./HeaderNav.module.css";

export const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLAnchorElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLLIElement>): void => {
    if (dropdownRef.current && isOpen && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (dropdownRef.current && isOpen && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.navLinks}>
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
          <li onClick={handleOpenMenu} className={styles.dropDownContainer}>
            <a href="#" className={`${styles.link} ${styles.arrow}`} ref={dropdownRef}>
              Наши работы {isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </a>
            <ul className={`${styles.dropDownContent} ${isOpen ? styles.open : ""}`}>
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
