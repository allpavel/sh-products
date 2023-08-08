import { Cards } from "@/app/components/Cards/Cards";
import styles from "./ServicesBody.module.css";

export const ServicesBody = () => {
  return (
    <section className={styles.container}>
      <Cards />
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
