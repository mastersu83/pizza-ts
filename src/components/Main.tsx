import React, { useState } from "react";
import classes from "./Main.module.scss";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import PizzaItems from "./PizzaItems/PizzaItems";

export interface ISortType {
  sort: string;
  order: string;
}

const Main = () => {
  const [sortState, setSortState] = useState<ISortType>({
    sort: "rating",
    order: "desc",
  });
  const [currentCategories, setCurrentCategories] = useState<number>(10);

  const handleSort = (sort: string, order: string) => {
    setSortState({ ...sortState, sort: sort, order: order });
  };
  const handleCategories = (id: number) => {
    setCurrentCategories(id);
  };
  return (
    <>
      <div className={classes.content__top}>
        <Categories handleCategories={handleCategories} />
        <Sort handleSort={handleSort} />
      </div>
      <h2 className={classes.content__title}>Все пиццы</h2>
      <PizzaItems sortState={sortState} currentCategories={currentCategories} />
    </>
  );
};

export default Main;
