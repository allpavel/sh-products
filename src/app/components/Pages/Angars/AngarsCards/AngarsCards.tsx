import Image from "next/image";
import { getData } from "@/app/utils/getData";
import styles from "./AngarsCards.module.css";
import { AngarsCardLoader } from "../AngarsCardLoader/AngarsCardLoader";

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

export const AngarCards = async () => {
  const cards: Cards = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/angars?populate=*&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );

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
              </article>
            ))}
        </div>
        {cards.data.length > 8 ? <AngarsCardLoader /> : null}
      </div>
    </section>
  );
};
