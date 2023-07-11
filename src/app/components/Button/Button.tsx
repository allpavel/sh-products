import styles from "./Button.module.css";

export const Button = ({ text, type }: { text: string; type: keyof typeof styles }) => {
  return <button className={`${styles[type]} ${styles.callToAction}`}>{text}</button>;
};
