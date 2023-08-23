import { FC, ReactNode } from "react";
import styles from "./SkeletonContainer.module.css";

type Props = {
  children: ReactNode;
};

export const SkeletonContainer: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
