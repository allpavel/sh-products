"use client";

import { useState } from "react";
import Image from "next/image";
import { LoadButton } from "@/app/components/LoadButton/LoadButton";
import { getData } from "@/app/utils/getData";
import styles from "./AngarsCardLoader.module.css";

interface Card {
  id: number;
  attributes: {
    description: string;
    image: {
      data: {
        attributes: {
          alternativeText: string;
          url: string;
        };
      };
    };
    price: string;
    title: string;
  };
}

interface Cards {
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

export const AngarsCardLoader = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [pageIndex, setPageIndex] = useState(2);
  const [pageCount, setPageCount] = useState(0);

  const handleIncreasePageIndex = async () => {
    const response: Cards = await getData(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/angars?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
    );
    setCards((prev) => [...prev, ...response.data]);
    setPageCount(response.meta.pagination.pageCount);
    setPageIndex((prev) => prev + 1);
  };

  return (
    <>
      <div className={styles.content}>
        {cards &&
          cards.map((card: Card) => (
            <article className={styles.card} key={card.id}>
              <div className={styles.imageContainer}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.attributes.image.data.attributes.url}`}
                  alt={card.attributes.image.data.attributes.alternativeText}
                  width={300}
                  height={178}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{card.attributes.title}</h3>
                <p className={styles.price}>{card.attributes.price}</p>
              </div>
            </article>
          ))}
      </div>
      <LoadButton increaseIndex={handleIncreasePageIndex} disable={!!(pageCount && pageIndex > pageCount)} />
    </>
  );
};
