import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./product/product.api";
import { filterSlice } from "./filter/filter";
import { cartSlice } from "./cart/cart";
import { loginSlise } from "./login/login";
import { modalSlice } from "./modal/modal";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    filter: filterSlice.reducer,
    cart: cartSlice.reducer,
    login: loginSlise.reducer,
    modal: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
