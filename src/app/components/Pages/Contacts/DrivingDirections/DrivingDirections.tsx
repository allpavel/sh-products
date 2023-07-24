import styles from "./DrivingDirections.module.css";

export const DrivingDirections = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Схема проезда</h2>
        <div className={styles.content}>
          <article className={styles.column}>
            <h3 className={styles.columnTitle}>Офис в Таганроге:</h3>
            <p className={styles.columnContent}>347939, Россия, Ростовская область, Таганрог, ул. Пархоменко, дом 19</p>
            <p className={styles.columnContent}>
              Предложенный маршрут предполагает движение по объездной дороге с въездом со стороны Мариупольского шоссе.
            </p>
            <p>На легковом автомобиле также будет удобен маршрут, пролегающий через Николаевское шоссе.</p>
          </article>
          <article className={styles.column}>
            <h3 className={styles.columnTitle}>Производственная база ООО “АГРО-ТЕХ”:</h3>
            <p className={styles.columnContent}>
              347939, Россия, Ростовская область, Таганрог, Мариупольское шоссе, 71Д (пер. 21-й Мариупольский).
            </p>
            <p className={styles.columnContent}>
              Расстояние от перекрестка с круговым движением до поворота на пер. 21-й Мариупольский составляет 4,5 км.
            </p>
            <p>
              По пути следования находится заправочная станция (справа), от нее 250 метров, после чего поворот направо.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
