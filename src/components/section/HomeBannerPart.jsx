import React from "react";
// next components
import Image from "next/image";
// reusable components
import SearchBox from "@/components/reusable/SearchBox";
// images
import bannerRightPartImage from "/public/images/banner-part-right-image.png";
import bannerPartOverlay from "/public/images/banner-part-overlay.png";
import discountIcon from "/public/images/discount-icon.png";
import freeDeliveryIcon from "/public/images/free-delivery-icon.png";
import supportIcon from "/public/images/support-icon.png";
import securePaymentIcon from "/public/images/secure-payment-icon.png";

const HomeBannerPart = () => {
  let extraService = [
    {
      icon: discountIcon,
      title: "Discount",
      description: "Every week new sales",
    },
    {
      icon: freeDeliveryIcon,
      title: "Free Delivery",
      description: "100% Free for all orders",
    },
    {
      icon: supportIcon,
      title: "Great Support 24/7",
      description: "We care your experiences",
    },
    {
      icon: securePaymentIcon,
      title: "secure Payment",
      description: "100% Secure Payment Method",
    },
  ];

  return (
    <section>
      <div className="relative container flex flex-col-reverse xl:flex-row items-center pb-10 2xl:py-20">
        <div className="hidden 2xl:block absolute top-0 left-[365px]">
          <Image src={bannerPartOverlay} alt="" fill={false} />
        </div>

        <div className="w-full xl:w-[55%]">
          <h1 className="font-primary-font text-center xl:text-start text-5xl xl:text-6xl 2xl:text-[96px] font-bold text-primary-text leading-[110%] mb-2.5 xl:mb-5 2xl:mb-10 mt-5 xl:mt-0">
            Good <span className="text-primary-color">food</span>, Great Memories
          </h1>

          <p className="font-secondary-font text-center xl:text-start text-xl xl:text-2xl 2xl:text-[40px] text-secondary-text mb-5 xl:mb-8 2xl:mb-10">
            Enable diners to customize their booking by requesting a specific
            table location or view.
          </p>

          <div className="w-full sm:w-[85%] mx-auto xl:mx-0 md:w-[500px] lg:w-[600px] xl:w-[550px] 2xl:w-[700px]">
            <SearchBox color={"secondary"} />
          </div>
        </div>

        <div className="w-full lg:w-[45%]">
          <div className="relative w-[60%] lg:w-[80%] xl:w-full mx-auto">
            <Image src={bannerRightPartImage} alt="left-image" fill={false} />
          </div>
        </div>
      </div>

      <div className="w-[85%] lg:w-full 2xl:w-[1300px] mx-auto lg:mx-3 xl:mx-5 2xl:mx-auto sm:flex flex-wrap gap-4 lg:gap-0 items-center px-10 py-14 rounded-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {extraService.map((item, index) => (
          <div key={index} className="w-full sm:w-[48%] lg:w-1/4 flex items-center gap-x-3 mb-5 sm:mb-0">
            <div className="relative w-[50px] aspect-square">
              <Image src={item.icon} alt={item.title} fill={true} />
            </div>

            <div>
              <h4 className="font-primary-font text-lg text-primary-text font-medium">
                {item.title}
              </h4>

              <p className="font-secondary-font text-base text-tertiary-text font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBannerPart;
