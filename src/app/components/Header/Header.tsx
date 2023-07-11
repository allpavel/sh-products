import { montserrat } from "@/app/layout";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";
import { HeaderTop } from "../HeaderTop/HeaderTop";

export const Header = () => {
  return (
    <header className={`${styles.container} ${montserrat.className}`}>
      <HeaderTop />
      <Button text="Заказать звонок" type="red" />
    </header>
  );
};
