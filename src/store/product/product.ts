import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ProductsList from "../../components/ProductsList";
import { ProductState } from "../../types";

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});
