"use client";

import React, { useRef, useState } from "react";
// next js components
import Image from "next/image";
// images
import rastaurantImageOne from "/public/images/rastaurant-image-four.jpg";
// react icons
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// react slick - npm package
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import kochu from "/public/images/milk-icon.png";
import rastaurantListInfo from "@/data/rastaurantListInfo";

const RastaurantInfo = ({ params }) => {
  const { id } = params;
  const [isSeeMore, setIsSeeMore] = useState(false);

  //  getting active rastaurant full informatin
  const data = rastaurantListInfo.filter((item) => {
    return id == item.id;
  });

  const rastaurantInfo = data[0];
  console.log(rastaurantInfo);

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

  return (
    <section className="container py-14">
      <div className="rounded-[8px] overflow-hidden mb-5 relative">
        <button
          onClick={previous}
          className="bg-secondary-color text-white p-2 text-3xl absolute top-2/4 -translate-y-2/4 left-5 z-10 rounded-md"
        >
          <IoIosArrowBack />
        </button>

        <button
          onClick={next}
          className="bg-secondary-color text-white p-2 text-3xl absolute top-2/4 -translate-y-2/4 right-5 z-10 rounded-md"
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
            <div key={index} className="w-full h-[650px] relative">
              <Image src={item} alt="rastu" fill={true} />
            </div>
          ))}
        </Slider>
      </div>

      <h4 className="font-primary-font text-[40px] font-medium text-primary-text border-b-2 border-primary-border/50 pb-1 mb-10">
        {rastaurantInfo?.name}
      </h4>

      <div className="flex mb-16">
        <div className="w-[40%]">
          <div className="flex gap-x-5 mb-8">
            <IoLocationSharp className="text-secondary-color text-[30px]" />

            <p className="font-secondary-font text-secondary-text text-2xl font-medium w-[400px] -mt-1">
              {rastaurantInfo?.locatioin}
            </p>
          </div>

          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-2">
              <MdOutlineStar className="text-[#ff7d29] text-3xl" />
              <MdOutlineStar className="text-[#ff7d29] text-3xl" />
              <MdOutlineStar className="text-[#ff7d29] text-3xl" />
              <MdOutlineStar className="text-[#ff7d29] text-3xl" />
              <MdOutlineStar className="text-[#ff7d29] text-3xl" />
            </div>

            <p className="text-primary-text font-semibold text-[26px] font-primary-font leading-none">
              {rastaurantInfo?.rating}
            </p>
          </div>
        </div>

        <div className="w-[60%] flex gap-x-4">
          <div>
            <FaBars className="text-2xl text-secondary-color" />
          </div>

          <div>
            <p className="font-secondary-font text-secondary-text text-2xl">
              {rastaurantInfo.description}
              <span className="text-secondary-color">Read more...</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-16">
        <div>
          <p className="font-primary-font text-primary-text text-4xl font-medium">
            Items🔥
          </p>
        </div>

        <button className="font-secondary-font text-secondary-color text-2xl font-medium bg-secondary-color/20 rounded-[40px] px-8 py-3">
          See more
        </button>
      </div>

      <div className="flex gap-5 mb-16">
        {rastaurantInfo?.items.map((item, index) => (
          <div key={index} className="w-[120px] aspect-square flex items-center justify-center rounded-[14px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <div>
              <div className="w-[45px] h-[52px] relative mb-1">
                <Image src={kochu} fill={true} />
              </div>

              <p className="font-font text-primary-text text-xl font-semibold">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-5">
        <div className="w-[32%] rounded-[14px] overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <div className="relative w-full aspect-video">
            <Image src={rastaurantImageOne} alt="" fill={true} />
          </div>

          <div className="py-6 px-8">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-primary-font text-primary-text text-[32px] font-medium">
                  Crazy tacko
                </h4>

                <p className="w-full font-secondary-font text-tertiary-text text-xl line-clamp-1">
                  Delicouse tackos, appetizing Delicouse tackos
                </p>
              </div>

              <p className="font-primary-font text-primary-text text-[32px] font-medium">
                $45.5
              </p>
            </div>
          </div>
        </div>

        <div className="w-[32%] rounded-[14px] overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <div className="relative w-full aspect-video">
            <Image src={rastaurantImageOne} alt="" fill={true} />
          </div>

          <div className="py-6 px-8">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-primary-font text-primary-text text-[32px] font-medium">
                  Crazy tacko
                </h4>

                <p className="w-full font-secondary-font text-tertiary-text text-xl line-clamp-1">
                  Delicouse tackos, appetizing Delicouse tackos
                </p>
              </div>

              <p className="font-primary-font text-primary-text text-[32px] font-medium">
                $45.5
              </p>
            </div>
          </div>
        </div>

        <div className="w-[32%] rounded-[14px] overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <div className="relative w-full aspect-video">
            <Image src={rastaurantImageOne} alt="" fill={true} />
          </div>

          <div className="py-6 px-8">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-primary-font text-primary-text text-[32px] font-medium">
                  Crazy tacko
                </h4>

                <p className="w-full font-secondary-font text-tertiary-text text-xl line-clamp-1">
                  Delicouse tackos, appetizing Delicouse tackos
                </p>
              </div>

              <p className="font-primary-font text-primary-text text-[32px] font-medium">
                $45.5
              </p>
            </div>
          </div>
        </div>

        <div className="w-[32%] rounded-[14px] overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <div className="relative w-full aspect-video">
            <Image src={rastaurantImageOne} alt="" fill={true} />
          </div>

          <div className="py-6 px-8">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-primary-font text-primary-text text-[32px] font-medium">
                  Crazy tacko
                </h4>

                <p className="w-full font-secondary-font text-tertiary-text text-xl line-clamp-1">
                  Delicouse tackos, appetizing Delicouse tackos
                </p>
              </div>

              <p className="font-primary-font text-primary-text text-[32px] font-medium">
                $45.5
              </p>
            </div>
          </div>
        </div>

        <div className="w-[32%] rounded-[14px] overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <div className="relative w-full aspect-video">
            <Image src={rastaurantImageOne} alt="" fill={true} />
          </div>

          <div className="py-6 px-8">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-primary-font text-primary-text text-[32px] font-medium">
                  Crazy tacko
                </h4>

                <p className="w-full font-secondary-font text-tertiary-text text-xl line-clamp-1">
                  Delicouse tackos, appetizing Delicouse tackos
                </p>
              </div>

              <p className="font-primary-font text-primary-text text-[32px] font-medium">
                $45.5
              </p>
            </div>
          </div>
        </div>

        <div className="w-[32%] rounded-[14px] overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <div className="relative w-full aspect-video">
            <Image src={rastaurantImageOne} alt="" fill={true} />
          </div>

          <div className="py-6 px-8">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-primary-font text-primary-text text-[32px] font-medium">
                  Crazy tacko
                </h4>

                <p className="w-full font-secondary-font text-tertiary-text text-xl line-clamp-1">
                  Delicouse tackos, appetizing Delicouse tackos
                </p>
              </div>

              <p className="font-primary-font text-primary-text text-[32px] font-medium">
                $45.5
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RastaurantInfo;
