"use client";
import { useEffect } from "react";
import { InitializeCart } from "@/lib/slice/addToCartSlice";
import { useAppDispatch } from "@/lib/hooks";

const CartInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(InitializeCart());
  }, [dispatch]);

  return null;
};

export default CartInitializer;
