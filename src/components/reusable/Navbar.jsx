"use client";

import React, { useEffect, useRef, useState } from "react";
// next js components
import Image from "next/image";
import Link from "next/link";
// images
import logo from "/public/images/company-logo.png";
// react icons
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
// reusable components
import navMenu from "@/data/navMenu";
// helper functions
import useCheckOutSideClick from "@/helper-function/checkOutSideClick";
import { useAppSelector } from "@/lib/hooks";

const Navbar = () => {
  const subMenuRef = useRef();
  const nevbarRef = useRef();
  const [isSubMenuShow, setIsSubMenuShow] = useState(false);
  const [isSmallDeviceMenShow, setIsSetsmallDeviceMenShow] = useState(false);
  const [isSearchOptionShow, setIsSearchOptionShow] = useState(false);

  const cartData = useAppSelector((state) => state.cartDetails.cartItems);

  const handleSubmenuShow = () => {
    setIsSubMenuShow(!isSubMenuShow);
  };

  useCheckOutSideClick(subMenuRef, () => {
    setIsSubMenuShow(false);
  });

  useCheckOutSideClick(nevbarRef, () => {
    setIsSetsmallDeviceMenShow(false);
  });

  return (
    <section
      ref={nevbarRef}
      className="bg-white/80 backdrop-blur sticky top-0 left-0 right-0 z-50 border-b border-secondary-border"
    >
      <div className="container py-3 md:py-4 lg:py-5 xl:py-6 2xl:py-7 flex items-center justify-between">
        <Link href={"/"}>
          <div className="w-[120px] md:w-[160px] xl:w-[190px] 2xl:w-[250px] relative">
            <Image src={logo} alt="company-name" fill={false} />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-x-10">
          <div className="hidden xl:block relative">
            <button className="absolute top-2/4 -translate-y-2/4 left-4   ">
              <IoIosSearch className="xl:text-xl 2xl:text-2xl text-tertiary-text" />
            </button>

            <input
              type="text"
              placeholder="Search"
              className="xl:w-[400px] 2xl:w-[500px] border-2 border-[#E6E6E6] outline-none rounded-[40px] xl:py-2 2xl:py-2.5 pl-12 pr-[130px] font-secondary-font xl:text-sm 2xl:text-base"
            />

            <button className="absolute top-0 bottom-0 right-0 bg-primary-color text-white px-8 font-secondary-font font-medium rounded-r-[40px] xl:text-sm 2xl:text-base">
              Search
            </button>
          </div>

          <ul className="flex items-center md:gap-x-7 lg:gap-x-8 xl:gap-x-10">
            {navMenu.map((item, index) =>
              item.submenu ? (
                <li
                  ref={subMenuRef}
                  key={index}
                  className="font-secondary-font font-medium text-sm lg:text-base 2xl:text-lg leading-[110%] text-secondary-text"
                >
                  <div
                    onClick={handleSubmenuShow}
                    className="flex items-center gap-x-1 xl:gap-x-2 relative cursor-pointer"
                  >
                    {item.name}{" "}
                    <IoIosArrowDown
                      className={
                        isSubMenuShow
                          ? "text-lg rotate-180 transition-all"
                          : "text-lg transition-all"
                      }
                    />
                    {isSubMenuShow && (
                      <ul className="smoothApear absolute top-full translate-y-4 left-2/4 -translate-x-2/4 text-center px-5 py-3 w-[150px] 2xl:w-[180px] rounded-md bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] space-y-1 xl:space-y-3">
                        {item.submenu.map((item, index) => (
                          <li
                            key={index}
                            className="text-base 2xl:text-xl font-primary-font text-primary-text hover:text-secondary-color transition-all"
                          >
                            <Link href={item.path}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ) : (
                <li
                  key={index}
                  className="font-secondary-font font-medium text-sm lg:text-base 2xl:text-lg leading-[110%] text-secondary-text"
                >
                  <Link href={item.path} className="flex items-center gap-x-2">
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-7">
          <button className="xl:hidden text-xl lg:text-[22px] xl:text-[25px] text-black active:scale-[0.9] hover:text-secondary-color transition-all duration-200 ease-in-out">
            <IoIosSearch />
          </button>

          <Link href={"/shoping-cart"} className="relative">
            <button className="text-xl lg:text-[22px] 2xl:text-[25px] text-black active:scale-[0.9] hover:text-secondary-color transition-all duration-200 ease-in-out">
              <FiShoppingCart />
            </button>

            {cartData.length >= 1 && (
              <p className="bg-secondary-color text-white w-[15px] lg:w-[20px] h-[15px] lg:h-[20px] text-sm lg:text-base flex items-center justify-center rounded-full absolute bottom-[60%] left-[50%]">
                {cartData.length}
              </p>
            )}
          </Link>

          <button className="text-xl lg:text-[22px] 2xl:text-[25px] text-black active:scale-[0.9] hover:text-secondary-color transition-all duration-200 ease-in-out">
            <LuUserRound />
          </button>
        </div>

        {/* ========== mobile device nav menu start ========== */}
        <div className="md:hidden flex items-center gap-x-3">
          <Link href={"/shoping-cart"} className="relative">
            <FiShoppingCart className="text-xl text-secondary-color" />

            {cartData.length >= 1 && (
              <p className="bg-secondary-color text-white w-[15px] h-[15px] flex items-center justify-center text-xs rounded-full absolute bottom-[60%] left-[50%]">
                {cartData.length}
              </p>
            )}
          </Link>

          <IoIosSearch className="text-xl text-secondary-color" />

          {isSmallDeviceMenShow ? (
            <RxCross2
              onClick={() => setIsSetsmallDeviceMenShow(!isSmallDeviceMenShow)}
              className="text-xl text-secondary-color"
            />
          ) : (
            <FaBars
              onClick={() => setIsSetsmallDeviceMenShow(!isSmallDeviceMenShow)}
              className="text-xl text-secondary-color"
            />
          )}
        </div>
        {/* ========== mobile device nav menu end ========== */}
      </div>

      {/* ========== mobile device nav menu start ========== */}
      {isSmallDeviceMenShow && (
        <div className={"border-t border-secondary-border smoothHightIncrease"}>
          <ul className="py-5 space-y-4 container">
            {navMenu.map((item, index) =>
              item.submenu ? (
                <li
                  key={index}
                  ref={subMenuRef}
                  className="font-secondary-font font-medium text-lg leading-[110%] text-secondary-text"
                >
                  <div
                    onClick={handleSubmenuShow}
                    className="flex items-center gap-x-2 cursor-pointer"
                  >
                    {item.name}{" "}
                    <IoIosArrowDown
                      className={
                        isSubMenuShow
                          ? "text-lg rotate-180 transition-all"
                          : "text-lg transition-all"
                      }
                    />
                  </div>
                  {!isSubMenuShow && (
                    <ul className="px-5 pt-3 rounded-md space-y-2">
                      {item.submenu.map((item, index) => (
                        <li
                          key={index}
                          className="text-lg font-primary-font text-tertiary-text font-normal"
                        >
                          <Link href={item.path}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li
                  key={index}
                  className="font-secondary-font font-medium text-lg leading-[110%] text-secondary-text"
                >
                  <Link href={item.path} className="flex items-center gap-x-2">
                    {item.name}
                  </Link>
                </li>
              )
            )}

            <li className="font-secondary-font font-medium text-lg leading-[110%] text-secondary-text">
              <Link href={""} className="flex items-center gap-x-2">
                Account
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* ========== mobile device nav menu end ========== */}
    </section>
  );
};

export default Navbar;
