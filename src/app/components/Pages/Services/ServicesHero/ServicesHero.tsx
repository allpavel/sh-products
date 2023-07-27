import styles from "./ServicesHero.module.css";
import { Button } from "@/app/components/Button/Button";

export const ServicesHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.filter}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>Производственные услуги по изготовлению деталей по чертежам</h1>
            <p className={styles.desc}>
              Современное высокотехнологическое оборудование позволяет выпускать детали с требуемой точностью как
              мелкими, так и крупными партиями
            </p>
            <ul className={styles.list}>
              <li>Раскрой и гибка металла</li>
              <li>Слесарные, токарные, сборочные, покрасочные работы</li>
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
