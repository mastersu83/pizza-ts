import React from "react";
import classes from "./CartEmpty.module.scss";
import commonClasses from "../../scss/common/Battons.module.scss";
import emptyCart from "../../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className={`${classes.cart__empty}`}>
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCart} alt="Empty cart" />
      <Link
        to="/"
        className={`${commonClasses.button} ${classes.button__black}`}
      >
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
