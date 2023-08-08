import { Button } from "@/components/Button/Button";
import styles from "./TechnicsHero.module.css";

export const TechnicsHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.filter}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>Производство сельхозтехники</h1>
            <p className={styles.desc}>
              Производим оборудование и машины, которые пользуются неизменно высоким спросом у сельхозпроизводителей
            </p>
            <ul className={styles.list}>
              <li>Бороны, разбрасыватели удобрений, опрыскиватели</li>
              <li>Модернизированный УАЗ, подвоз жидкости, ЖКУ, КАЗ и прочая техника</li>
            </ul>
            <p className={styles.title}>Получить консультацию:</p>
            <form className={styles.form}>
              <label className={styles.label} htmlFor="tel">
                Ваш телефон <span className={styles.asterisk}>*</span>
              </label>
              <div className={styles.formInputs}>
                <input
                  type="tel"
                  id="tel"
                  name="phone"
                  placeholder="+7 ( ___ ) ___ - __ - __ "
                  className={styles.phoneInput}
                />
                <div className={styles.buttons}>
                  <Button text="Отправить" type="red" icon="telegram" size="medium" />
                  <Button text="8-912-345-67-89" type="green" size="medium" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
