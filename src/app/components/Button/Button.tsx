import styles from "./Button.module.css";
import { BiLogoTelegram } from "react-icons/bi";

type Icons = {
  [key: string]: () => JSX.Element;
};

interface Props {
  text: string;
  type: "green" | "red" | "outlineGreen" | "outlineRed";
  size: "large" | "medium";
  onClick?: () => void;
  icon?: string;
  active?: boolean;
}

const icons: Icons = {
  telegram: () => <BiLogoTelegram />,
};

export const Button = ({ text, type, size, icon, active = false, ...rest }: Props) => {
  return (
    <button
      className={`${styles[type]} ${styles[size]} ${styles.callToAction} ${active ? styles.active : ""}`}
      {...rest}
    >
      <span className={`${icon ? styles.text : ""}`}>{text}</span>
      {icon ? icons[icon]() : ""}
    </button>
  );
};
