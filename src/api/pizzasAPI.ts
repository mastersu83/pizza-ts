import { PizzaType } from "../types/pizzaType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const pizzasAPI = createApi({
  reducerPath: "pizzasAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8888/",
  }),
  tagTypes: ["Pizzas"],
  endpoints: (build) => ({
    getPizzas: build.query<
      PizzaType[],
      {
        currentCategories: number | null;
        sort: string | null;
        order: string | null;
      }
    >({
      query: ({ currentCategories, sort, order }) => ({
        url: `pizzas`,
        params: {
          category_like: currentCategories === 10 ? "" : currentCategories,
          _sort: sort,
          _order: order,
        },
      }),
      providesTags: ["Pizzas"],
    }),
    getPizzasFilterCategories: build.query<PizzaType[], number | null>({
      query: (categories) => ({
        url: `pizzas?category_like=${categories}`,
      }),
      providesTags: ["Pizzas"],
    }),
  }),
});

export const { useGetPizzasQuery, useGetPizzasFilterCategoriesQuery } =
  pizzasAPI;
