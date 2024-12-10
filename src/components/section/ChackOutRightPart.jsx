"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import OrderSuccessModal from "./OrderSuccessModal";

const ChackOutRightPart = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <>
      <div className="w-full border border-[#e9e9e9] bg-white rounded-md px-5 py-3 mt-5 xl:mt-0">
        <p className="text-2xl font-medium font-secondary-font text-primary-text mb-5">
          Order summery
        </p>

        <div className="flex items-center justify-between border-b border-[#e6e6e6] pb-3 mb-4">
          <div className="flex items-center gap-x-2">
            <div className="min-w-[70px] aspect-square relative rounded-md overflow-hidden">
              <Image
                src={
                  "https://images.pexels.com/photos/4058699/pexels-photo-4058699.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt=""
                fill={true}
              />
            </div>

            <p className="font-primary-font text-black font-medium text-xl line-clamp-2">
              Fridge x1
            </p>
          </div>

          <p className="font-primary-font text-[#4c4c4c] text-xl">$140.00</p>
        </div>

        <div className="flex items-center justify-between border-b border-[#e6e6e6] pb-3 mb-4">
          <p className="font-primary-font text-[#808080] text-xl">Shipping:</p>
          <p className="font-primary-font text-[#4c4c4c] text-xl">Free</p>
        </div>

        <div className="flex items-center justify-between mb-7">
          <p className="font-primary-font text-[#808080] text-xl">Total:</p>
          <p className="font-primary-font text-[#4c4c4c] text-xl">$150.00</p>
        </div>

        <div>
          <p className="text-2xl font-medium font-secondary-font text-primary-text mb-3">
            Paymant method
          </p>

          <div className="mb-2 space-x-3">
            <input
              type="radio"
              id="cod"
              name="payment-mathod"
              value="CSS"
              className="scale-[1.5]"
            />
            <label for="cod" className="text-xl font-secondary-font text-black">
              Cash on Delivery
            </label>
          </div>

          <div className="mb-5 space-x-3">
            <input
              type="radio"
              id="paypal"
              name="payment-mathod"
              value="CSS"
              className="scale-[1.5]"
            />
            <label
              for="paypal"
              className="text-xl font-secondary-font text-black"
            >
              Paypal
            </label>
          </div>
        </div>

        <Link href={"/shoping-cart/chackout"}>
          <button
            onClick={() => setIsModalShow(true)}
            className="w-full lg:w-[30%] xl:w-full py-2 xl:py-3 rounded-[40px] bg-[#ea5326] text-white xl:text-xl font-primary-font font-medium"
          >
            Place Order
          </button>
        </Link>
      </div>

      <OrderSuccessModal show={isModalShow} setShow={setIsModalShow} />
    </>
  );
};

export default ChackOutRightPart;
