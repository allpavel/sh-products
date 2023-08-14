import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Button } from "../Button/Button";
import styles from "./Hero.module.css";

interface Props {
  page: string;
  data: {
    metaDescription: string;
    heroDescription: string;
  };
}

export const Hero = ({ page, data }: Props) => {
  return (
    <section className={styles.container} data-subCategory={page}>
      <div className={styles.filter}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>{data.metaDescription}</h1>
            <ReactMarkdown>{data.heroDescription}</ReactMarkdown>
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
