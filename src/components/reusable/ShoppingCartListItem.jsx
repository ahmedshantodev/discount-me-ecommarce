import { useAppDispatch } from "@/lib/hooks";
import { RemoveFromCart, UpdateQuantity } from "@/lib/slice/addToCartSlice";
import Image from "next/image";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const ShoppingCartListItem = ({ info }) => {
  const dispatch = useAppDispatch();

  const handlePlus = () => {
    dispatch(UpdateQuantity({ ...info, type: "plus" }));
  };

  const handleMinus = () => {
    dispatch(UpdateQuantity({ ...info, type: "minus" }));
  };

  const handleRemoveFromCart = () => {
    dispatch(RemoveFromCart(info));
  };
  return (
    <div className="flex items-center px-3 py-2.5 relative border-b border-[#e6e6e6]">
      <button
        onClick={handleRemoveFromCart}
        className="bg-[#f2f2f2] p-2.5 text-black rounded-[40px] text-lg 2xl:text-2xl absolute top-2/4 -translate-y-2/4 right-4 scale-[0.80]"
      >
        <RxCross2 />
      </button>

      <div className="w-[40%] flex items-center gap-x-2.5">
        <div className="min-w-[100px] aspect-square relative rounded-md overflow-hidden">
          <Image src={info.thumbnail} alt="" fill={true} />
        </div>

        <p className="font-primary-font text-xl text-primary-text line-clamp-2 pr-2">
          {info.name}
        </p>
      </div>

      <div className="w-[20%]">
        <p className="font-primary-font text-xl text-primary-text line-clamp-2 pr-2">
          ${info.price}
        </p>
      </div>

      <div className="w-[20%]">
        <div className="w-[150px] flex items-center justify-between border-2 border-[#e6e6e6] p-1 2xl:p-[6px] rounded-[40px]">
          <button
            onClick={handleMinus}
            className="bg-[#f2f2f2] p-2 text-black rounded-[40px] text-lg 2xl:text-2xl"
          >
            <FiMinus />
          </button>

          <p className="text-primary-text text-sm 2xl:text-lg font-primary-font">
            {info.quantity}
          </p>

          <button
            onClick={handlePlus}
            className="bg-[#f2f2f2] p-2 text-black rounded-[40px] text-lg 2xl:text-2xl"
          >
            <FiPlus />
          </button>
        </div>
      </div>

      <div className="w-[20%]">
        <p className="font-primary-font text-xl text-primary-text line-clamp-2 pr-2 font-medium">
          ${info.price * info.quantity}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCartListItem;
