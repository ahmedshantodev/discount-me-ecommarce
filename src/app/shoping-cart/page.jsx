"use client";

import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import ShoppingCartListItem from "@/components/reusable/ShoppingCartListItem";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

const ShoppingCartPage = () => {
  const cartData = useAppSelector((state) => state.cartDetails.cartItems);
  
  const subtotal = cartData.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
  
  return (
    <section className="">
      <div className="bg-product-details-top-part-bg bg-no-repeat bg-cover py-4 lg:py-12 text-white">
        <div className="container flex items-center gap-x-4">
          <Link href={"/"}>
            <IoHomeOutline className="text-lg lg:text-2xl" />
          </Link>

          <IoIosArrowForward className="lg:text-xl" />

          <p className="font-primary-font lg:text-xl font-medium">Shopping</p>

          <IoIosArrowForward className="lg:text-xl" />

          <p className="font-primary-font lg:text-xl text-primary-color font-medium">
            Cart
          </p>
        </div>
      </div>

      <div className="container py-7 xl:py-14">
        <h4 className="font-primary-font text-2xl md:text-3xl 2xl:text-[48px] leading-[140%] text-primary-text font-medium mb-10">
          My Shopping Cart
        </h4>

        <div className="xl:flex items-start gap-x-8">
          <div className="xl:w-[70%] overflow-y-auto">
            <div className="w-[1000px] lg:w-full border border-[#e6e6e6] rounded-md">
              <div className="flex items-center px-3 py-2 border-b border-[#e6e6e6]">
                <div className="w-[40%]">
                  <p className="font-primary-font text-[#808080] text-lg">
                    Product
                  </p>
                </div>

                <div className="w-[20%]">
                  <p className="font-primary-font text-[#808080] text-lg">
                    price
                  </p>
                </div>

                <div className="w-[20%]">
                  <p className="font-primary-font text-[#808080] text-lg">
                    Quantity
                  </p>
                </div>

                <div className="w-[20%]">
                  <p className="font-primary-font text-[#808080] text-lg">
                    Subtotal
                  </p>
                </div>
              </div>

              <div>
                {cartData.map((item, index) => (
                  <ShoppingCartListItem key={index} info={item} />
                ))}
              </div>

              <div className="py-5 px-6 flex items-center justify-between">
                <button className="bg-[#f2f2f2] text-[#4c4c4c] text-xl font-primary-font font-medium py-3 px-10 rounded-[40px]">
                  Return to shop
                </button>

                <button className="bg-[#f2f2f2] text-[#4c4c4c] text-xl font-primary-font font-medium py-3 px-10 rounded-[40px]">
                  Update Cart
                </button>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[30%] border border-[#e9e9e9] rounded-md px-5 py-3 mt-5 xl:mt-0">
            <p className="text-2xl font-medium font-secondary-font text-primary-text mb-5">
              Cart Total
            </p>

            <div className="flex items-center justify-between border-b border-[#e6e6e6] pb-3 mb-4">
              <p className="font-primary-font text-[#808080] text-xl">
                Subtotal :
              </p>
              <p className="font-primary-font text-[#4c4c4c] text-xl">
                ${subtotal}
              </p>
            </div>

            <div className="flex items-center justify-between border-b border-[#e6e6e6] pb-3 mb-4">
              <p className="font-primary-font text-[#808080] text-xl">
                Shipping:
              </p>
              <p className="font-primary-font text-[#4c4c4c] text-xl">Free</p>
            </div>

            <div className="flex items-center justify-between mb-7">
              <p className="font-primary-font text-[#808080] text-xl">Total:</p>
              <p className="font-primary-font text-[#4c4c4c] text-xl">
                ${subtotal}
              </p>
            </div>

            <Link href={"/shoping-cart/chackout"}>
              <button className="w-full lg:w-[30%] xl:w-full py-2 xl:py-3 rounded-[40px] bg-[#ea5326] text-white xl:text-xl font-primary-font font-medium">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartPage;
