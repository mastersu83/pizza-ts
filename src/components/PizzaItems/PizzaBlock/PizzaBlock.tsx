import React, { FC, useState } from "react";
import classes from "./PizzaBlock.module.scss";
import commonClasses from "../../../scss/common/Battons.module.scss";
import { useAppDispatch } from "../../../hooks/appHooks";
import { addPizzaInBasket } from "../../../redux/reducers/basketSlice";
import { addCountCurrentPizza } from "../../../redux/reducers/pizzasSlice";

type PropsType = {
  imageUrl: string;
  name: string;
  price: number;
  types: number[];
  sizes: number[];
  id: number;
  rating: number;
  category: number;
  count: number;
  totalPrice: number;
};

const PizzaBlock: FC<PropsType> = ({
  imageUrl,
  name,
  price,
  types,
  sizes,
  id,
  rating,
  category,
  count,
}) => {
  const type: string[] = ["тонкое", "традиционное"];
  const size: number[] = [26, 30, 40];
  const dispatch = useAppDispatch();
  const [activeSize, setActiveSize] = useState<number>(0);
  const [activeType, setActiveType] = useState<number>(types[0]);

  // console.log(count);

  const onAddPizzaInBasket = () => {
    dispatch(
      addPizzaInBasket({
        imageUrl,
        name,
        price,
        types: type[activeType],
        sizes: size[activeSize],
        id: Number("" + id + types[activeType] + sizes[activeSize]),
        rating,
        category,
        count: 1,
        totalPrice: price,
      })
    );
    dispatch(addCountCurrentPizza(id));
  };

  return (
    <div className={classes.pizzaBlock}>
      <img className={classes.pizzaBlock__image} src={imageUrl} alt="Pizza" />
      <h4 className={classes.pizzaBlock__title}>{name}</h4>
      <div className={classes.pizzaBlock__selector}>
        <ul>
          {type.map((t, index) => (
            <li
              key={t}
              onClick={() => setActiveType(index)}
              className={`${activeType === index ? classes.active : ""}
              ${!types.includes(index) ? classes.disabled : ""}`}
            >
              {t}
            </li>
          ))}
        </ul>
        <ul>
          {size.map((s, index) => (
            <li
              key={s}
              onClick={() => setActiveSize(index)}
              className={`${activeSize === index ? classes.active : ""}
              ${!sizes.includes(s) ? classes.disabled : ""}`}
            >
              {s} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.pizzaBlock__bottom}>
        <div className={classes.pizzaBlock__price}>от {price} ₽</div>
        <div
          onClick={onAddPizzaInBasket}
          className={`${commonClasses.button} ${commonClasses.button__outline} ${commonClasses.button__add}`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{count}</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
