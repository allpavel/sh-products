import { Button } from "../Button/Button";
import styles from "./CallToAction.module.css";

export const CallToAction = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Не нашли что искали?</h2>
        <p className={styles.desc}>
          Отправьте заявку — подберем необходимое оборудование или комплектующие, рассчитаем стоимость постройки или
          производства!
        </p>
        <form className={styles.form}>
          <label htmlFor="tel">
            Ваш телефон <span className={styles.asterisk}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="tel"
              id="tel"
              name="phone"
              placeholder="+7 ( ___ ) ___ - __ - __ "
              className={styles.phoneInput}
            />
            <Button text="Заказать расчёт" type="red" icon="telegram" size="medium" />
          </div>
        </form>
      </div>
    </section>
  );
};
