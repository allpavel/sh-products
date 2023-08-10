import Image from "next/image";
import Link from "next/link";
import { CardsLoader } from "../CardsLoader/CardsLoader";
import styles from "./Cards.module.css";

interface Card {
  id: number;
  attributes: {
    title: string;
    cover: {
      data: {
        attributes: {
          alternativeText: string;
          formats: {
            thumbnail: {
              url: string;
            };
          };
          url: string;
        };
      };
    };
    price?: string;
    slug: string;
  };
}

interface CardsSchema {
  data: Card[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

interface CardProps {
  cards: CardsSchema;
  title: string;
  pathname: string;
  scrollToTop?: boolean;
}

export const Cards = async ({ cards, title, pathname, scrollToTop = true }: CardProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          {cards &&
            cards.data.map((card: Card) => (
              <article className={styles.card} key={card.id}>
                <div className={styles.imageContainer}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.attributes.cover.data.attributes.url}`}
                    alt={card.attributes.cover.data.attributes.alternativeText}
                    width={278}
                    height={178}
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>{card.attributes.title}</h3>
                  {card.attributes.price && <p className={styles.price}>{card.attributes.price}</p>}
                </div>
                <Link href={`${pathname}/${card.attributes.slug}`} className={styles.link} scroll={scrollToTop} />
              </article>
            ))}
        </div>
        {cards && cards.meta.pagination.total > 8 ? <CardsLoader page={pathname} /> : null}
      </div>
    </section>
  );
};
