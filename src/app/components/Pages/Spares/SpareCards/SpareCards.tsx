import Image from "next/image";
import { getData } from "@/app/utils/getData";
import styles from "./SpareCards.module.css";
import { CardLoader } from "../CardLoader/CardLoader";

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

export const SparesCards = async () => {
  const cards: Cards = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/spares?populate=*&pagination[page]=1&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_SIZE}`
  );

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Запчасти и комплектущие</h2>
        <div className={styles.content}>
          {cards &&
            cards.data.map((card: Card) => (
              <article className={styles.card} key={card.id}>
                <div className={styles.imageContainer}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.attributes.image.data.attributes.url}`}
                    alt={card.attributes.image.data.attributes.alternativeText}
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
        <CardLoader />
        <p className={`${styles.text} ${styles.marginTop}`}>
          У нас Вы можете найти запчасти и комплектующие на сельхозтехнику: разбрасыватели удобрений, штанговые
          (полевые) и вентиляторные (садовые) опрыскиватели, бороны кольчатые и пружинные и многое другое.
        </p>
        <p className={styles.text}>
          Каталог постоянно обновляется, поэтому, если Вы не нашли подходящую деталь – позвоните нам по номеру
          8-928-212-22-19 – мы оперативно подберем нужные запчасти.
        </p>
      </div>
    </section>
  );
};
