import styles from "./CardSkeleton.module.css";

export const CardSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.image}></div>
        <div className={styles.cardContent}>
          <div className={styles.title}></div>
          <div className={styles.price}></div>
        </div>
      </div>
    </div>
  );
};
