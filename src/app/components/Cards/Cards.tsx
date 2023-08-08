"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getData } from "@/app/utils/getData";
import { CardsLoader } from "../CardsLoader/CardsLoader";
import styles from "./Cards.module.css";

interface Card {
  id: number;
  attributes: {
    description: string;
    cover: {
      data: {
        attributes: {
          alternativeText: string;
          url: string;
        };
      };
    };
    price: string;
    title: string;
    slug: string;
  };
}

interface CardsProp {
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

export const Cards = () => {
  const [cards, setCards] = useState<CardsProp>();
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const response: CardsProp = await getData(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api${pathname}?populate=*&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
      );
      setCards(response);
    };
    fetchData();
  }, [pathname]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Ангары</h2>
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
                  <p className={styles.price}>{card.attributes.price}</p>
                </div>
                <Link href={`angars/${card.attributes.slug}`} className={styles.link} />
              </article>
            ))}
        </div>
        {cards && cards.meta.pagination.total > 8 ? <CardsLoader page={pathname} /> : null}
      </div>
    </section>
  );
};
