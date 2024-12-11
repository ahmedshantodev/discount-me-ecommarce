"use client";

import React, { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { useAppDispatch } from "@/lib/hooks";
import { AddToCart } from "@/lib/slice/addToCartSlice";
import { toast } from "react-toastify";

const ProductDetailsTopRightPart = ({ info }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(AddToCart({ ...info, quantity: quantity }));

    toast.success("Successfully added to cart", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      theme: "light",
    });
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between lg:justify-start gap-x-5 mb-1">
        <h4 className="font-primary-font text-2xl md:text-3xl 2xl:text-[48px] leading-[140%] text-primary-text">
          {info?.name}
        </h4>

        <p className="bg-secondary-color/30 text-secondary-color font-secondary-font text-lg py-2 px-4 rounded-md scale-[0.60] md:scale-[.70] 2xl:scale-[1.00]">
          In Stock
        </p>
      </div>

      <div className="flex items-center gap-x-2 mb-2.5">
        <div className="flex items-center">
          <MdOutlineStar className="text-primary-color text-lg 2xl:text-2xl" />
          <MdOutlineStar className="text-primary-color text-lg 2xl:text-2xl" />
          <MdOutlineStar className="text-primary-color text-lg 2xl:text-2xl" />
          <MdOutlineStar className="text-primary-color text-lg 2xl:text-2xl" />
          <MdOutlineStar className="text-primary-color text-lg 2xl:text-2xl" />
        </div>

        <p className="text-secondary-text font-secondary-font text-sm 2xl:text-lg font-medium">
          {info?.review?.length} Review
        </p>
      </div>

      <p className="font-primary-font text-primary-color text-xl 2xl:text-3xl font-medium leading-[150%] border-b border-primary-border/50 pb-3 mb-3 2xl:mb-6">
        ${info?.price}
      </p>

      <p className="font-primary-font text-lg 2xltext-xl text-primary-text font-medium mb-2.5 2xl:mb-4">
        Category: <span className="text-tertiary-text">{info?.Category}</span>
      </p>

      <p className="font-secondary-font text-lg lg:text-base 2xl:text-xl text-tertiary-text mb-7">
        {info?.description}
      </p>

      <div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2.5 2xl:gap-x-5 border-2 border-[#e6e6e6] p-1 2xl:p-[6px] rounded-[40px]">
            <button
              onClick={handleMinus}
              className="bg-[#f2f2f2] p-2.5 text-black rounded-[40px] text-lg 2xl:text-2xl"
            >
              <FiMinus />
            </button>

            <p className="text-primary-text text-sm 2xl:text-lg font-primary-font">
              {quantity}
            </p>

            <button
              onClick={handlePlus}
              className="bg-[#f2f2f2] p-2.5 text-black rounded-[40px] text-lg 2xl:text-2xl"
            >
              <FiPlus />
            </button>
          </div>

          <button className="flex items-center gap-x-2.5 bg-primary-color text-white py-2.5 2xl:py-4 px-2.5 sm:px-10 2xl:px-[150px] rounded-[40px] font-primary-font 2xl:text-lg">
            Checkout <AiOutlineShopping className="text-lg lg:text-2xl" />
          </button>

          <button
            onClick={handleAddToCart}
            className="bg-[#dfe1e3] p-3 text-black rounded-[40px] text-lg 2xl:text-3xl"
          >
            <CiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTopRightPart;
