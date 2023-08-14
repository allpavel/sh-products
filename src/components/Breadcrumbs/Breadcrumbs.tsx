"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumbs.module.css";

interface Props {
  attributes: {
    title: string;
    category: string;
    sub_category: {
      data: {
        attributes: {
          title: string;
        };
      };
    };
  };
}

export const Breadcrumbs = ({ card }: { card: Props }) => {
  const pathname = usePathname();
  const pathSegments = pathname.slice(1).split("/");

  if (pathSegments.length === 2) {
    return (
      <nav className={styles.container} aria-label="breadcrumb">
        <div className={styles.wrapper}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.link}>
              Главная
            </Link>
            <span className={styles.divider}>/</span>
            <Link href={`/${pathSegments[0]}`} className={styles.link}>
              {card.attributes.category}
            </Link>
            <span className={styles.divider}>/</span>
            <span className={styles.currentPage} aria-current="page">
              {card.attributes.title}
            </span>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.container} aria-label="breadcrumb">
      <div className={styles.wrapper}>
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.link}>
            Главная
          </Link>
          <span className={styles.divider}>/</span>
          <Link href={`/${pathSegments[0]}`} className={styles.link}>
            {card.attributes.category}
          </Link>
          <span className={styles.divider}>/</span>
          <Link href={`/${pathSegments[0]}/${pathSegments[1]}`} className={styles.link}>
            {card.attributes.sub_category.data.attributes.title}
          </Link>
          <span className={styles.divider}>/</span>
          <span className={styles.currentPage} aria-current="page">
            {card.attributes.title}
          </span>
        </div>
      </div>
    </nav>
  );
};
