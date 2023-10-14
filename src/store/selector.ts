import { FilterState } from "../types";
import { RootState } from "./store";

export const getFilterCategory = (state: RootState) => state.filter;
export const getProductCart = (state: RootState) => state.cart.products;
// export const getProductQuantity = (state: RootState) => state.cart.quantity;
export const getLogin = (state: RootState) => state.login.login;
export const getModal = (state: RootState) => state.modal;
