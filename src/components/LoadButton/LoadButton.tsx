import { Button } from "../Button/Button";
import styles from "./LoadButton.module.css";

interface Props {
  disable: boolean;
  increaseIndex: () => void;
}

export const LoadButton = ({ increaseIndex, disable }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Button text="Загрузить ещё" type="red" size="large" onClick={increaseIndex} disabled={disable} />
      </div>
    </div>
  );
};
