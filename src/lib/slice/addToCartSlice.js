"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const addToCartSlice = createSlice({
  name: "add-to-cart",
  initialState,
  reducers: {
    InitializeCart: (state) => {
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("cartItem");
        if (savedCart) {
          state.cartItems = JSON.parse(savedCart);
        }
      }
    },

    AddToCart: (state, action) => {
      const findIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex >= 0) {
        state.cartItems[findIndex].quantity += action.payload.quantity;
      } else {
        const newItem = {
          ...action.payload,
          quantity: action.payload.quantity,
        };
        state.cartItems.push(newItem);
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      }
    },

    RemoveFromCart: (state, action) => {
      const removeIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (removeIndex !== -1) {
        const updatedCartItems = [...state.cartItems];

        updatedCartItems.splice(removeIndex, 1);

        if (typeof window !== "undefined") {
          localStorage.setItem("cartItem", JSON.stringify(updatedCartItems));
        }

        return { ...state, cartItems: updatedCartItems };
      }
    },

    UpdateQuantity: (state, action) => {
      const findIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex >= 0) {
        if (action.payload.type == "plus") {
          state.cartItems[findIndex].quantity++;
        } else {
          if (state.cartItems[findIndex].quantity >= 2) {
            state.cartItems[findIndex].quantity--;
          }
        }
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { InitializeCart, AddToCart, RemoveFromCart, UpdateQuantity } =
  addToCartSlice.actions;

export default addToCartSlice.reducer;
