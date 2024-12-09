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

const Banner = () => {
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
      <div className="relative container flex items-center py-20">
        <div className="absolute top-0 left-[365px]">
          <Image src={bannerPartOverlay} alt="" fill={false} />
        </div>

        <div className="w-[55%]">
          <h1 className="font-primary-font text-[96px] font-bold text-primary-text leading-[110%] mb-10">
            Good <span className="text-primary-color">food</span>, great
            memories
          </h1>

          <p className="font-secondary-font text-[40px] text-secondary-text mb-10">
            Enable diners to customize their booking by requesting a specific
            table location or view.
          </p>

          <div className="w-[700px]">
            <SearchBox />
          </div>
        </div>

        <div className="w-[45%]">
          <div className="relative w-full">
            <Image src={bannerRightPartImage} alt="left-image" fill={false} />
          </div>
        </div>
      </div>

      <div className="w-[1300px] mx-auto flex items-center px-10 py-14 rounded-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {extraService.map((item, index) => (
          <div key={index} className="w-1/4 flex items-center gap-x-3">
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

export default Banner;
