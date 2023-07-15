import { Button } from "../Button/Button";
import styles from "./Build.module.css";

export const Build = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
      <div>
        <Button text="Ангары бескаркасные" type="outlineGreen" />
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      </div>
    </section>
  )
}