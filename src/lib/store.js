import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slice/addToCartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cartDetails: addToCartSlice
    },
  });
};
