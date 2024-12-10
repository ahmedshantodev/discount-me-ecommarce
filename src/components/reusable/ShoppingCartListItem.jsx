import Image from "next/image";
import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const ShoppingCartListItem = () => {
  return (
    <div className="flex items-center px-3 py-2.5 relative border-b border-[#e6e6e6]">
      <button className="bg-[#f2f2f2] p-2.5 text-black rounded-[40px] text-lg 2xl:text-2xl absolute top-2/4 -translate-y-2/4 right-4 scale-[0.80]">
        <RxCross2 />
      </button>

      <div className="w-[40%] flex items-center gap-x-2.5">
        <div className="min-w-[100px] aspect-square relative rounded-md overflow-hidden">
          <Image
            src={
              "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill={true}
          />
        </div>

        <p className="font-primary-font text-xl text-primary-text line-clamp-2 pr-2">
          Freezer
        </p>
      </div>

      <div className="w-[20%]">
        <p className="font-primary-font text-xl text-primary-text line-clamp-2 pr-2">
          $14.00
        </p>
      </div>

      <div className="w-[20%]">
        <div className="w-[150px] flex items-center justify-between border-2 border-[#e6e6e6] p-1 2xl:p-[6px] rounded-[40px]">
          <button className="bg-[#f2f2f2] p-2 text-black rounded-[40px] text-lg 2xl:text-2xl">
            <FiMinus />
          </button>

          <p className="text-primary-text text-sm 2xl:text-lg font-primary-font">
            5
          </p>

          <button className="bg-[#f2f2f2] p-2 text-black rounded-[40px] text-lg 2xl:text-2xl">
            <FiPlus />
          </button>
        </div>
      </div>

      <div className="w-[20%]">
        <p className="font-primary-font text-xl text-primary-text line-clamp-2 pr-2 font-medium">
          $14.00
        </p>
      </div>
    </div>
  );
};

export default ShoppingCartListItem;
