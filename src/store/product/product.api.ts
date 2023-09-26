import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../types";

export const productApi = createApi({
  reducerPath: "product/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useFetchProductsQuery } = productApi;
