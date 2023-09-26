import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, IProduct } from "../../types";

const LS_CART_KEY = "ReactTS_My_App_Cart";

const initialState: CartState = {
  products: JSON.parse(localStorage.getItem(LS_CART_KEY) ?? "[]"),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductCart(state, action: PayloadAction<IProduct>) {
      if (!state.products.some((item) => item.id == action.payload.id)) {
        state.products.push(action.payload);
        localStorage.setItem(LS_CART_KEY, JSON.stringify(state.products));
      }
    },
    removeProductCart(state, action: PayloadAction<number>) {
      state.products = state.products.filter((item) => item.id !== action.payload);
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.products));
    },
  },
});

export const productActions = cartSlice.actions;
