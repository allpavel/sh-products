"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LoadButton } from "@/components/LoadButton/LoadButton";
import { getData } from "@/utils/getData";
import { CardsSchema, Card } from "@/types/types";
import styles from "./CardsLoader.module.css";

interface Props {
  page: string;
}

export const CardsLoader = ({ page }: Props) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [pageIndex, setPageIndex] = useState(2);
  const [pageCount, setPageCount] = useState(0);

  const handleIncreasePageIndex = async () => {
    const response: CardsSchema = await getData(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api${page}?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
    );
    setCards((prev) => [...prev, ...response.data]);
    setPageCount(response.meta.pagination.pageCount);
    setPageIndex((prev) => prev + 1);
  };

  return (
    <>
      <div className={styles.content}>
        {cards &&
          cards.map((card) => (
            <article className={styles.card} key={card.id}>
              <div className={styles.imageContainer}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.attributes.cover.data.attributes.url}`}
                  alt={card.attributes.cover.data.attributes.alternativeText}
                  width={300}
                  height={178}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{card.attributes.title}</h3>
                <p className={styles.price}>{card.attributes.price}</p>
              </div>
              <Link href={`${page}/${card.attributes.slug}`} className={styles.link} />
            </article>
          ))}
      </div>
      <LoadButton increaseIndex={handleIncreasePageIndex} disable={!!(pageCount && pageIndex > pageCount)} />
    </>
  );
};
