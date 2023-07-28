import Image from "next/image";
import uslugi1 from "../../../../../../public/images/uslugi-1.jpg";
import uslugi2 from "../../../../../../public/images/uslugi-2.jpg";
import uslugi3 from "../../../../../../public/images/uslugi-3.jpg";
import uslugi4 from "../../../../../../public/images/uslugi-4.jpg";
import uslugi5 from "../../../../../../public/images/uslugi-5.jpg";
import styles from "./ServicesCards.module.css";

export const ServicesCards = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Услуги</h2>
      <div className={styles.content}>
        <article className={styles.card}>
          <div className={styles.imageContainer}>
            <Image src={uslugi1} alt="Сварка с искрами" width={300} height={178} className={styles.image} />
          </div>
          <div className={styles.cardContent}>
            <h3>Раскрой листового металла</h3>
            <p className={styles.price}>Цена рассчитывается по запросу</p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.imageContainer}>
            <Image src={uslugi2} alt="Гибка детали" width={300} height={178} className={styles.image} />
          </div>
          <div className={styles.cardContent}>
            <h3>Гибка листового металла</h3>
            <p className={styles.price}>Цена рассчитывается по запросу</p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src={uslugi3}
              alt="Сверло просверивает отверстие в детали"
              width={300}
              height={178}
              className={styles.image}
            />
          </div>
          <div className={styles.cardContent}>
            <h3>Слесарные и сборочные работы</h3>
            <p className={styles.price}>Цена рассчитывается по запросу</p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src={uslugi4}
              alt="Порошковая покраска детали в белый цвет"
              width={300}
              height={178}
              className={styles.image}
            />
          </div>
          <div className={styles.cardContent}>
            <h3>Порошковая покраска в любой цвет</h3>
            <p className={styles.price}>Цена рассчитывается по запросу</p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.imageContainer}>
            <Image src={uslugi5} alt="Изготовление детали" width={300} height={178} className={styles.image} />
          </div>
          <div className={styles.cardContent}>
            <h3>Токарные работы по чертежам</h3>
            <p className={styles.price}>Цена рассчитывается по запросу</p>
          </div>
        </article>
      </div>
    </div>
  );
};
