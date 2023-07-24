import styles from "../DrivingDirections/DrivingDirections.module.css";

export const Dealers = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Дилеры</h2>
        <div className={styles.card}>
          <div className={styles.content}>
            <article className={styles.column}>
              <h3 className={styles.columnTitle}>АО Торговый дом “Славянский”</h3>
              <p>Ставропольский кр, Шпаковский р-н, с. Верхнерусское</p>
            </article>
            <article className={styles.column}>
              <h3 className={styles.columnTitle}>Генеральный директор</h3>
              <p>Кирин Василий Васильевич</p>
            </article>
          </div>
          <div className={styles.content}>
            <article className={styles.column}>
              <h3 className={styles.columnTitle}>Контакты</h3>
              <ul className={styles.list}>
                <li>Колпаков Сергей Александрович</li>
                <li>8-900-123-45-67</li>
                <li>8-987-654-32-10</li>
                <li>8 (1111) 12-21-12</li>
                <li>38-68-28</li>
                <li>95-83-00</li>
                <li>95-84-00</li>
                <li>slavy200002@mail.ru</li>
              </ul>
            </article>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <article className={styles.column}>
              <h3 className={styles.columnTitle}>ЗАО КПК “СтавропольСтройОптТорг”</h3>
              <p>Ставропольский край, Шпаковский р-н, Верхнерусское</p>
            </article>
            <article className={styles.column}>
              <h3 className={styles.columnTitle}>Генеральный директор</h3>
              <p>Калашников Виктор Михайлович</p>
            </article>
          </div>
          <div className={styles.content}>
            <article className={styles.column}>
              <h3 className={styles.columnTitle}>Контакты</h3>
              <ul className={styles.list}>
                <li>Филиппов Владимир Ильич</li>
                <li>8-922-124-44-77</li>
                <li>sgd2022@torg.ru</li>
              </ul>
            </article>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <article className={styles.column}>
              <h3 className={styles.columnTitle}>ООО “АГРО-Ресурс”</h3>
            </article>
            <article className={styles.column}>
              <h3 className={styles.lastColumnTitle}>г. Краснодар ул.Круговая 54</h3>
            </article>
          </div>
          <div className={styles.content}>
            <article className={styles.column}>
              <ul className={styles.list}>
                <li>8-922-124-44-77</li>
                <li>8-982-634-43-07</li>
                <li>8-987-654-32-10</li>
                <li>8 (1111) 12-21-12</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
