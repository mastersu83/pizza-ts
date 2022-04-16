import React, { FC, useEffect } from "react";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import classes from "./PizzaItems.module.scss";
import { useGetPizzasQuery } from "../../api/pizzasAPI";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { getPizzas } from "../../redux/reducers/pizzasSlice";
import { ISortType } from "../Main";

type PropsTypes = {
  sortState: ISortType;
  currentCategories: number;
};

const PizzaItems: FC<PropsTypes> = ({ sortState, currentCategories }) => {
  const dispatch = useAppDispatch();
  const { sort, order } = sortState;
  const { pizzas } = useAppSelector((state) => state.pizzas);

  const { data, isSuccess } = useGetPizzasQuery({
    currentCategories,
    sort,
    order,
  });

  useEffect(() => {
    isSuccess && dispatch(getPizzas(data));
  }, [isSuccess, data]);

  return (
    <div className={classes.content__items}>
      {isSuccess &&
        pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
    </div>
  );
};

export default PizzaItems;
