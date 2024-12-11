"use client";

import React, { useRef, useState } from "react";
// next js components
import Image from "next/image";
// react icons
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// react slick - npm package
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import rastaurantListInfo from "@/data/rastaurantListInfo";
import Link from "next/link";
import productListInfo from "@/data/productListInfo";
import ProductListItem from "@/components/reusable/ProductListItem";

const RastaurantInfoPage = ({ params }) => {
  const { id } = params;
  const [isSeeMore, setIsSeeMore] = useState(false);

  //  getting active rastaurant full informatin
  const data = rastaurantListInfo.filter((item) => {
    return id == item.id;
  });

  const rastaurantInfo = data[0];

  // react slick settings
  let sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  // read more feature
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = rastaurantInfo.description.substring(0, 200);

  return (
    <section className="container py-5 lg:py-8 2xl:py-14">
      <div className="rounded-[8px] overflow-hidden mb-2.5 lg:mb-5 relative">
        <button
          onClick={previous}
          className="bg-secondary-color text-white p-1 2xl:p-2 text-2xl lg:text-3xl absolute top-2/4 -translate-y-2/4 left-5 z-10 rounded-md"
        >
          <IoIosArrowBack />
        </button>

        <button
          onClick={next}
          className="bg-secondary-color text-white p-1 2xl:p-2 text-2xl lg:text-3xl absolute top-2/4 -translate-y-2/4 right-5 z-10 rounded-md"
        >
          <IoIosArrowForward />
        </button>

        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {rastaurantInfo?.images.map((item, index) => (
            <div
              key={index}
              className="w-full max-xl:aspect-video xl:h-[650px] relative"
            >
              <Image src={item} alt={rastaurantInfo?.name} fill={true} />
            </div>
          ))}
        </Slider>
      </div>

      <h4 className="font-primary-font text-2xl lg:text-3xl 2xl:text-[40px] font-medium text-primary-text border-b-2 border-primary-border/50 pb-1 mb-5 lg:mb-7 2xl:mb-10">
        {rastaurantInfo?.name}
      </h4>

      <div className="lg:flex mb-8 xl:mb-16">
        <div className="w-full lg:w-[40%] mb-5 lg:mb-0">
          <div className="flex gap-x-2.5 xl:gap-x-5 mb-3 xl:mb-8">
            <IoLocationSharp className="text-secondary-color text-2xl xl:text-[30px]" />

            <p className="font-secondary-font text-secondary-text text-lg lg:text-xl 2xl:text-2xl font-medium w-[400px] -mt-1">
              {rastaurantInfo?.locatioin}
            </p>
          </div>

          <div className="flex items-center gap-x-2.5 xl:gap-x-6 ml-7 lg:ml-0">
            <div className="flex items-center lg:gap-x-1 xl:gap-x-2">
              <MdOutlineStar className="text-[#ff7d29] text-xl lg:text-2xl 2xl:text-3xl" />
              <MdOutlineStar className="text-[#ff7d29] text-xl lg:text-2xl 2xl:text-3xl" />
              <MdOutlineStar className="text-[#ff7d29] text-xl lg:text-2xl 2xl:text-3xl" />
              <MdOutlineStar className="text-[#ff7d29] text-xl lg:text-2xl 2xl:text-3xl" />
              <MdOutlineStar className="text-[#ff7d29] text-xl lg:text-2xl 2xl:text-3xl" />
            </div>

            <p className="text-primary-text font-semibold text-lg xl:text-[26px] font-primary-font leading-none">
              {rastaurantInfo?.rating}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[60%] flex gap-x-4">
          <div>
            <FaBars className="text-xl xl:text-2xl text-secondary-color" />
          </div>

          <div>
            <p className="font-secondary-font text-secondary-text text-lg lg:text-xl 2xl:text-2xl -mt-1">
              {isExpanded ? rastaurantInfo.description : truncatedText} {"  "}
              <span
                onClick={toggleExpand}
                className="text-secondary-color cursor-pointer"
              >
                {isExpanded ? "Read less..." : "Read more..."}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8 lg:mb-12 2xl:mb-16">
        <div>
          <p className="font-primary-font text-primary-text text-xl lg:text-2xl 2xl:text-4xl font-medium">
            Items🔥
          </p>
        </div>

        <Link href="/product-details">
          <button className="font-secondary-font text-secondary-color text-sm lg:text-lg 2xl:text-2xl font-medium bg-secondary-color/20 rounded-[40px] px-5 lg:px-6 2xl:px-8 py-1 lg:py-2 2xl:py-3">
            See more
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap gap-2.5 sm:gap-3 lg:gap-5 mb-8 2xl:mb-16">
        {rastaurantInfo?.items.map((item, index) => (
          <div
            key={index}
            className="w-[100px] sm:w-[90px] lg:w-[120px] aspect-square flex items-center justify-center rounded-[14px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
          >
            <div className="text-center">
              <div className="w-[35px] lg:w-[45px] mx-auto relative mb-1">
                <Image src={item.image} alt={item.name} fill={false} />
              </div>

              <p className="font-font text-primary-text lg:text-xl font-semibold">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:flex flex-wrap gap-2.5 lg:gap-5">
        {productListInfo.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[49%] lg:w-[32%] rounded-[14px] overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mb-5 sm:mb-0"
          >
            <ProductListItem type={"secondary"} info={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RastaurantInfoPage;
