"use client";

import Image from "next/image";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadButton } from "@/components/LoadButton/LoadButton";
import { useCards } from "@/hooks/useCards";
import { Card } from "@/types/types";
import styles from "./CardsLoader.module.css";

interface Props {
  page: string;
}

const queryClient = new QueryClient();

const Loader = ({ page }: Props) => {
  const { isFetching, hasNextPage, fetchNextPage, cards } = useCards(page);
  const handleIncreasePageIndex = () => fetchNextPage();

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <div className={styles.content}>
        {cards &&
          cards.map((card: Card) => (
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
      <LoadButton increaseIndex={handleIncreasePageIndex} disable={hasNextPage === false} />
    </>
  );
};

export const CardsLoader = ({ page }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Loader page={page} />
    </QueryClientProvider>
  );
};
