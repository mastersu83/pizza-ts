import { BasketPizzaType } from "../types/pizzaType";

export const currentSum = (basket: BasketPizzaType[]) => {
  return basket.reduce((sum, pizza) => pizza.totalPrice + sum, 0);
};
export const currentCount = (basket: BasketPizzaType[]) => {
  return basket.reduce((sum, pizza) => pizza.count + sum, 0);
};
