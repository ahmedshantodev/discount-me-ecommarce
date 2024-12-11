"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// react slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ProductDetailsTopLeftPart = ({info}) => {
  let images = info.images;

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const next = () => {
    nav1.slickNext();
  };
  const previous = () => {
    nav1.slickPrev();
  };

  return (
    <div className="w-full flex items-center gap-x-3">
      <div className="w-[20%] relative">
        <button
          onClick={previous}
          className="text-xl lg:text-3xl text-tertiary-text p-1 rounded-full absolute bottom-full -translate-y-2 left-2/4 -translate-x-2/4 z-10"
        >
          <IoIosArrowUp />
        </button>

        <button
          onClick={next}
          className="text-xl lg:text-3xl text-tertiary-text p-1 rounded-full absolute top-full left-2/4 -translate-x-2/4 z-10"
        >
          <IoIosArrowDown />
        </button>

        <div>
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
            verticalSwiping={true}
          >
            {images.map((item, index) => (
              <div key={index} className="relative w-full h-[60px] sm:h-[70px] md:h-[80px] 2xl:h-[130px]">
                <Image src={item} alt="hi" fill={true} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="w-[80%] h-[300px] md:h-[350px] 2xl:h-[500px] relative rounded-[10px] overflow-hidden">
        <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
          {images.map((item, index) => (
            <div key={index} className="w-full h-[300px] md:h-[350px] 2xl:h-[500px] relative">
              <Image src={item} alt="" fill={true} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetailsTopLeftPart;
