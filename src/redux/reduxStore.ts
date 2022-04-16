import { configureStore } from "@reduxjs/toolkit";

import { pizzasAPI } from "../api/pizzasAPI";
import { categoriesAPI } from "../api/categoriesAPI";
import pizzasSlice from "./reducers/pizzasSlice";
import basketSlice from "./reducers/basketSlice";

export const setupState = () => {
  return configureStore({
    reducer: {
      pizzas: pizzasSlice,
      basket: basketSlice,
      [pizzasAPI.reducerPath]: pizzasAPI.reducer,
      [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        pizzasAPI.middleware,
        categoriesAPI.middleware
      ),
  });
};

export type AppStoreType = ReturnType<typeof setupState>;
export type RootReducerType = ReturnType<AppStoreType["getState"]>;
export type AppDispatchType = AppStoreType["dispatch"];
