import React, { FC, useState } from "react";
import classes from "./Sort.module.scss";

const sortItems = [
  { name: "популярности", type: "rating", order: "desc" },
  { name: "цене", type: "price", order: "asc" },
  { name: "алфавит", type: "name", order: "asc" },
];
type PropsTypes = {
  handleSort: (sort: string, order: string) => void;
};

const Sort: FC<PropsTypes> = ({ handleSort }) => {
  const [activeSort, setActiveSort] = useState<number>(0);
  const [visibleSortPopup, setVisibleSortPopup] = useState<boolean>(false);

  const onClickSort = (sort: string, order: string, index: number) => {
    setActiveSort(index);
    handleSort(sort, order);
  };

  return (
    <div className={classes.sort}>
      <div className={classes.sort__label}>
        <svg
          className={`${visibleSortPopup ? classes.rotated : ""}`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setVisibleSortPopup(!visibleSortPopup)}>
          популярности
        </span>
      </div>
      <div
        className={`${classes.sort__popup} ${
          visibleSortPopup ? classes.open : ""
        }`}
      >
        <ul>
          {sortItems.map((sort, index) => (
            <li
              key={sort.type}
              onClick={() => onClickSort(sort.type, sort.order, index)}
              className={`${activeSort === index ? classes.active : ""}`}
            >
              {sort.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
