import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketPizzaType } from "../../types/pizzaType";
import { currentCount, currentSum } from "../../helper/helper";

export type InitialStateType = {
  basketPizza: BasketPizzaType[];
  totalSum: number;
  totalCount: number;
};

const initialState: InitialStateType = {
  basketPizza: [],
  totalSum: 0,
  totalCount: 0,
};

const pizzasSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addPizzaInBasket(
      state: InitialStateType,
      action: PayloadAction<BasketPizzaType>
    ) {
      if (!state.basketPizza.length) {
        state.basketPizza.push(action.payload);
      } else if (
        state.basketPizza.some((pizza) => pizza.id === action.payload.id)
      ) {
        state.basketPizza = state.basketPizza.map((pizza) =>
          pizza.id === action.payload.id
            ? {
                ...pizza,
                count: pizza.count + 1,
                totalPrice: pizza.price * (pizza.count + 1),
              }
            : pizza
        );
      } else {
        state.basketPizza.push(action.payload);
      }
      state.totalSum = currentSum(state.basketPizza);
      state.totalCount = currentCount(state.basketPizza);
    },
    countPlus(state: InitialStateType, action: PayloadAction<number>) {
      state.basketPizza = state.basketPizza.map((pizza) =>
        pizza.id === action.payload
          ? {
              ...pizza,
              count: pizza.count + 1,
              totalPrice: pizza.price * (pizza.count + 1),
            }
          : pizza
      );
      state.totalSum = currentSum(state.basketPizza);
      state.totalCount = currentCount(state.basketPizza);
    },
    countMinus(state: InitialStateType, action: PayloadAction<number>) {
      state.basketPizza = state.basketPizza.map((pizza) =>
        pizza.id === action.payload
          ? {
              ...pizza,
              count: pizza.count - 1,
              totalPrice: pizza.price * (pizza.count - 1),
            }
          : pizza
      );
      state.totalSum = currentSum(state.basketPizza);
      state.totalCount = currentCount(state.basketPizza);
    },
    removePizzaInBasket(
      state: InitialStateType,
      action: PayloadAction<number>
    ) {
      state.basketPizza = state.basketPizza.filter(
        (pizza) => pizza.id !== action.payload
      );
      state.totalSum = currentSum(state.basketPizza);
      state.totalCount = currentCount(state.basketPizza);
    },
    clearBasket(state: InitialStateType) {
      state.basketPizza = [];
      state.totalSum = currentSum(state.basketPizza);
      state.totalCount = currentCount(state.basketPizza);
    },
  },
});

export const {
  addPizzaInBasket,
  removePizzaInBasket,
  countPlus,
  countMinus,
  clearBasket,
} = pizzasSlice.actions;

export default pizzasSlice.reducer;
