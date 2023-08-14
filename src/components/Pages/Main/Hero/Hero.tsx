import { Button } from "@/components/Button/Button";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.filter}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>Производство сельскохозяйственной техники и строительство ангаров</h1>
            <p className={styles.desc}>(Ангары, Бороны, Опрыскиватели, Сельхозтехника, Запчасти)</p>
            <ul className={styles.list}>
              <li>Опрыскиватели, бороны, разбрасыватели удобрений</li>
              <li>
                Каркасные и бескаркасные арочные сооружения для различных отраслей промышленности и сельского хозяйства
              </li>
            </ul>
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
