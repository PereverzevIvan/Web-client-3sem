import { FC } from "react";
import styles from "./universityCard.module.scss";

export interface IUniversity {
  country: string;
  name: string;
}

export const UniversityCard: FC<{ data: IUniversity }> = ({ data }) => {
  return (
    <div className={styles["university-card"]}>
      <span>
        University name:
        <span className={styles["university-card__info"]}> {data.name}</span>
      </span>
      <span>
        Country:
        <span className={styles["university-card__info"]}> {data.country}</span>
      </span>
    </div>
  );
};
