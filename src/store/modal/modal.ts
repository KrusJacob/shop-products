import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, ModalState } from "../../types";

const initialState: ModalState = {
  modalActive: false,
  productImg: undefined,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<IProduct["image"]>) => {
      state.modalActive = true;
      state.productImg = action.payload;
    },
    hideModal: (state) => {
      state.modalActive = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
