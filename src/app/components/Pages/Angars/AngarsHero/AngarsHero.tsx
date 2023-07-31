import { Button } from "@/app/components/Button/Button";
import styles from "./AngarsHero.module.css";

export const AngarsHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.filter}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>Строительство ангаров, быстровозводимых металлических сооружений</h1>
            <p className={styles.desc}>
              Технология бескаркасного арочного строительства ангаров по праву считается наиболее эффективным способом
              быстрого возведения производственных и складских площадей
            </p>
            <ul className={styles.list}>
              <li>Каркасные и бескаркасные ангары, тока и навесы, тентовые ангары</li>
              <li>Овоще-, зернохранилища, ангары-свинарники, коровники</li>
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
