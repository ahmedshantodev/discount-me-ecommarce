import React from "react";
// next js components
import Image from "next/image";
import Link from "next/link";
// images
import logo from "/public/images/company-logo.png";
// react icons
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import navMenu from "@/data/navMenu";

const Navbar = () => {
  return (
    <section className="bg-white/80 backdrop-blur border-b border-secondary-border sticky top-0 left-0 right-0 z-50">
      <div className="container py-7 flex items-center justify-between ">
        <Link href={"/"}>
          <div className="w-[250px] h-[65px] relative">
            <Image src={logo} alt="company-name" fill={true} />
          </div>
        </Link>

        <div className="flex items-center gap-x-10">
          <div className="relative">
            <button className="absolute top-2/4 -translate-y-2/4 left-4   ">
              <IoIosSearch className="text-2xl text-tertiary-text" />
            </button>

            <input
              type="text"
              placeholder="Search"
              className="w-[500px] border-2 border-[#E6E6E6] outline-none rounded-[40px] py-2.5 pl-12 pr-[130px] font-secondary-font"
            />

            <button className="absolute top-0 bottom-0 right-0 bg-primary-color text-white px-8 font-secondary-font font-medium rounded-r-[40px]">
              Search
            </button>
          </div>

          <ul className="flex items-center gap-x-10">
            {navMenu.map((item, index) => (
              <li
                key={index}
                className="font-secondary-font font-medium text-lg leading-[110%] text-secondary-text"
              >
                <Link href={item.path} className="flex items-center gap-x-2">
                  {item.name}

                  {item.submenu && <IoIosArrowDown className="text-lg" />}

                  {/* {item.submenu && (
                  <div>
                    <ul>
                      {item.submenu.map((item, index) => (
                        <li key={index}>
                          <Link href={item.path}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )} */}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-x-7">
          <button className="text-[25px] text-black active:scale-[0.9] hover:text-secondary-color transition-all duration-200 ease-in-out">
            <FiShoppingCart />
          </button>

          <button className="text-[25px] text-black active:scale-[0.9] hover:text-secondary-color transition-all duration-200 ease-in-out">
            <LuUserRound />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
