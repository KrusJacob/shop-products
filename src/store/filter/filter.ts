import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "../../types";

const initialState: FilterState = {
  category: [],
  minPrice: null,
  maxPrice: null,
  popularSwitch: false,
  ratingSwitch: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<string>) {
      state.category.push(action.payload);
    },
    removeCategory(state, action: PayloadAction<string>) {
      state.category = state.category.filter((item) => item !== action.payload);
    },
    resetCategory(state) {
      state.category = [];
    },
    changeMinPrice(state, action: PayloadAction<string>) {
      state.minPrice = +action.payload;
    },
    changeMaxPrice(state, action: PayloadAction<string>) {
      state.maxPrice = +action.payload;
    },
    resetPrice(state) {
      state.minPrice = null;
      state.maxPrice = null;
    },
    togglePopularSwitch(state) {
      state.popularSwitch = !state.popularSwitch;
    },
    resetPopularSwitch(state) {
      state.popularSwitch = false;
    },
    toggleRatingSwitch(state) {
      state.ratingSwitch = !state.ratingSwitch;
    },
    resetRatingSwitch(state) {
      state.ratingSwitch = false;
    },
    resetAllFilters(state) {
      state.category = [];
      state.popularSwitch = false;
      state.ratingSwitch = false;
    },
  },
});

export const filterActions = filterSlice.actions;
