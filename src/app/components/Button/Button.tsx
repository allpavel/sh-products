import styles from "./Button.module.css";
import { BiLogoTelegram } from "react-icons/bi";

type Icons = {
  [key: string]: () => JSX.Element;
};

type Props = {
  text: string;
  type: "green" | "red" | "outlineGreen" | "outlineRed";
  size: "large" | "medium";
  icon?: string;
};

const icons: Icons = {
  telegram: () => <BiLogoTelegram />,
};

export const Button = ({ text, type, size, icon }: Props) => {
  return (
    <button className={`${styles[type]} ${styles[size]} ${styles.callToAction}`}>
      <span className={styles.text}>{text}</span>
      {icon ? icons[icon]() : ""}
    </button>
  );
};
