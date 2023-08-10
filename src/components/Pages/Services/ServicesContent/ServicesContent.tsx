import styles from "./ServicesContent.module.css";

export const ServicesContent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.bold}>
          Предприятие ООО «АГРО-ТЕХ» предоставляет широкий спектр производственных услуг по изготовлению деталей по
          чертежам Заказчика и приглашает к сотрудничеству.
        </p>
        <p>
          Современное высокотехнологическое оборудование позволяет выпускать детали с требуемой точностью как мелкими,
          так и крупными партиями.
        </p>
      </div>
    </section>
  );
};
