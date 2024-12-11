"use client"

import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import ChackOutRightPart from "@/components/section/ChackOutRightPart";
import ChackOutLeftPart from "@/components/section/ChackOutLeftPart";

const ChackoutPage = () => {
  
  return (
    <section>
      <div className="bg-product-details-top-part-bg bg-no-repeat bg-cover py-4 lg:py-12 text-white">
        <div className="container flex items-center gap-x-4">
          <Link href={"/"}>
            <IoHomeOutline className="text-lg lg:text-2xl" />
          </Link>

          <IoIosArrowForward className="lg:text-xl" />

          <Link href={"/shoping-cart"}>
            <p className="font-primary-font lg:text-xl font-medium">Shopping</p>
          </Link>

          <IoIosArrowForward className="lg:text-xl" />

          <p className="font-primary-font lg:text-xl text-primary-color font-medium">
            Chackout
          </p>
        </div>
      </div>

      <div className="py-8 2xl:py-16 container">
        <div className="lg:flex items-start gap-x-10">
          <div className="w-full lg:w-[70%]">
            <ChackOutLeftPart />
          </div>

          <div className="w-full lg:w-[30%]">
            <ChackOutRightPart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChackoutPage;
