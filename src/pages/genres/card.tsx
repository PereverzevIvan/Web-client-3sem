import { FC } from "react";
import "./pagination.scss";

export interface IUniversity {
  country: string;
  name: string;
}

export const UniversityCard: FC<{ data: IUniversity }> = ({ data }) => {
  return (
    <div className="university-card">
      <span>
        University name:
        <span className="university-card__info"> {data.name}</span>
      </span>
      <span>
        Country:
        <span className="university-card__info"> {data.country}</span>
      </span>
    </div>
  );
};
