import styles from "./Button.module.css";
import { BiLogoTelegram } from "react-icons/bi";

type Icons = {
  [key: string]: () => JSX.Element;
};

const icons: Icons = {
  telegram: () => <BiLogoTelegram />,
};

export const Button = ({ text, type, icon }: { text: string; type: keyof typeof styles; icon?: string }) => {
  return (
    <button className={`${styles[type]} ${styles.callToAction}`}>
      <span className={styles.text}>{text}</span>
      {icon ? icons[icon]() : ""}
    </button>
  );
};
