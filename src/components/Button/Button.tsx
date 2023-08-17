import styles from "./Button.module.css";
import { BiLogoTelegram } from "react-icons/bi";

type Icons = {
  [key: string]: () => JSX.Element;
};

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  type: "green" | "red" | "outlineGreen" | "outlineRed";
  size: "large" | "medium";
  icon?: string;
  active?: boolean;
  disabled?: boolean;
}

const icons: Icons = {
  telegram: () => <BiLogoTelegram />,
};

export const Button = ({ text, type, size, icon, disabled = false, active = false, className: cn, ...rest }: Props) => {
  return (
    <button
      className={`${cn} ${styles[type]} ${styles[size]} ${styles.callToAction} ${active && styles.active} ${
        disabled && styles.disabled
      }`}
      disabled={disabled}
      {...rest}
    >
      <span className={`${icon ? styles.text : ""}`}>{text}</span>
      {icon ? icons[icon]() : ""}
    </button>
  );
};
