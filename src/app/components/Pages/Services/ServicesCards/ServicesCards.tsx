import Image from "next/image";
import { getCards } from "@/app/utils/getCards";
import styles from "./ServicesCards.module.css";

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

export const ServicesCards = async () => {
  const cards: Cards = await getCards();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Услуги</h2>
      <div className={styles.content}>
        {cards.data.map((card: Card) => (
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
    </div>
  );
};
