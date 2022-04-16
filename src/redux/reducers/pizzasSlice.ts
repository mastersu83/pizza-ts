import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaType } from "../../types/pizzaType";

type InitialStateType = {
  pizzas: PizzaType[];
};

const initialState: InitialStateType = {
  pizzas: [],
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    getPizzas(state: InitialStateType, action: PayloadAction<PizzaType[]>) {
      state.pizzas = action.payload.map((pizza) => ({ ...pizza, count: 0 }));
    },
    addCountCurrentPizza(
      state: InitialStateType,
      action: PayloadAction<number>
    ) {
      state.pizzas = state.pizzas.map((pizza) =>
        pizza.id === action.payload
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      );
    },
  },
});

export const { getPizzas, addCountCurrentPizza } = pizzasSlice.actions;

export default pizzasSlice.reducer;
