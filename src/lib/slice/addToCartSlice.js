"use client";
import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "add-to-cart",
  initialState: {
    value: null
  },
  reducers: {
    cartTotal: (state, action) => {
      console.log(state.value);
      console.log(action.payload);
    },
  },
});

export const { cartTotal } = addToCartSlice.actions;

export default addToCartSlice.reducer;
