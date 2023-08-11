import Link from "next/link";
import { CardsSchema } from "@/types/types";
import styles from "./Breadcrumbs.module.css";

interface CardProps {
  cards: CardsSchema;
  title: string;
  pathname: string;
  scrollToTop?: boolean;
}

export const Breadcrumbs = ({ cards, title }: CardProps) => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.link}>
            Главная
          </Link>
          <span className={styles.divider}>/</span>
          <Link href="/angars" className={styles.link}>
            {cards.data[0].attributes.category}
          </Link>
          <span className={styles.divider}>/</span>
          <Link href={`/angars/${cards.data[0].attributes.sub_category.data.attributes.slug}`} className={styles.link}>
            {cards.data[0].attributes.sub_category.data.attributes.title}
          </Link>
          <span className={styles.divider}>/</span>
          <span className={styles.currentPage}>{cards.data[0].attributes.title}</span>
        </div>
      </div>
    </nav>
  );
};
