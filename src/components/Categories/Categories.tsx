import React, { FC, useState } from "react";
import classes from "./Categories.module.scss";
import { useGetCategoriesQuery } from "../../api/categoriesAPI";
import { ICategoriesType } from "../../types/categoriesType";

type PropsTyeps = {
  handleCategories: (id: number) => void;
};

const Categories: FC<PropsTyeps> = ({ handleCategories }) => {
  const [activeCategories, setActiveCategories] = useState<number>(0);

  const { data: categories, isSuccess } = useGetCategoriesQuery({});

  const onClickCategories = (id: number, index: number) => {
    setActiveCategories(index);
    handleCategories(id);
  };

  return (
    <div className={classes.categories}>
      <ul>
        {isSuccess &&
          categories.map((cat: ICategoriesType, index: number) => (
            <li
              onClick={() => onClickCategories(cat.id, index)}
              key={cat.id}
              className={`${activeCategories === index ? classes.active : ""}`}
            >
              {cat.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
