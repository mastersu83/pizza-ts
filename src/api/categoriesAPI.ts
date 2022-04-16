import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategoriesType } from "../types/categoriesType";

export const categoriesAPI = createApi({
  reducerPath: "categoriesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8888/",
  }),
  tagTypes: ["Categories"],
  endpoints: (build) => ({
    getCategories: build.query<ICategoriesType[], any>({
      query: () => ({
        url: "categories",
      }),
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesAPI;
