import React from "react";
// next js components
import Image from "next/image";
// images
import logo from "/public/images/company-logo.png";
import QrCode from "/public/images/app-download-qr-code.png";
import playStore from "/public/images/download-playstore.png";
import appStore from "/public/images/download-appstore.png";

const Footer = () => {
  return (
    <section className="bg-[#232323] text-white">
      <div className="container flex flex-wrap py-10 lg:py-[75px]">
        <div className="w-full xl:w-[40%] mb-10 xl:mb-0">
          <div className="w-[200px] lg:w-[250px] relative mb-3">
            <Image src={logo} alt="company-name" fill={false} />
          </div>

          <p className="lg:w-[365px] font-secondary-font text-tertiary-text text-lg mb-5">
            Ecommerce is a free UI Kit from Paperpillar that you can use for
            your personal or commercial project.
          </p>

          <div className="space-x-3">
            <input
              type="text"
              placeholder="Type your email address"
              className="py-3 px-6 rounded-[40px] border border-white bg-transparent lg:w-[280px] font-secondary-font font-medium"
            />

            <button className="bg-white text-black rounded-[40px] px-8 py-3 font-secondary-font font-medium">
              Submit
            </button>
          </div>
        </div>

        <div className="w-[49%] sm:w-[32%] md:w-[24%] xl:w-[15%] mb-10 lg:mb-0">
          <p className="font-secondary-font font-medium text-lg lg:text-xl mb-5 lg:mb-7">
            Account
          </p>

          <ul className="font-secondary-font font-normal lg:text-lg space-y-2.5 lg:space-y-4">
            <li>
              <a href="/login">Login</a>
            </li>

            <li>
              <a href="/registration">registration</a>
            </li>

            <li>
              <a href="/shoping-cart">Cart</a>
            </li>

            <li>
              <a href="/coupon-cards">Coupons</a>
            </li>

            <li>
              <a href="">Shop</a>
            </li>
          </ul>
        </div>

        <div className="w-[49%] sm:w-[32%] md:w-[24%] xl:w-[15%] mb-10 lg:mb-0">
          <p className="font-secondary-font font-medium text-lg lg:text-xl mb-5 lg:mb-7">
            Quick Link
          </p>

          <ul className="font-secondary-font font-normal lg:text-lg space-y-2.5 lg:space-y-4">
            <li>
              <a href="">Privacy Policy</a>
            </li>

            <li>
              <a href="">Terms Of Use</a>
            </li>

            <li>
              <a href="">FAQ</a>
            </li>

            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="w-[49%] sm:w-[32%] md:w-[24%] xl:w-[15%] mb-10 lg:mb-0">
          <p className="font-secondary-font font-medium text-lg lg:text-xl mb-5 lg:mb-7">
            Support
          </p>

          <ul className="font-secondary-font font-normal lg:text-lg space-y-2.5 lg:space-y-4">
            <li>
              <a href="">exclusive@gmail.com</a>
            </li>

            <li>
              <a href="">+88015-88888-9999</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-[24%] xl:w-[15%]">
          <p className="font-secondary-font font-medium text-xl mb-7">
            Download App
          </p>

          <div className="flex gap-x-3">
            <div className="w-[80px] md:w-[60px] lg:w-[80px] aspect-square relative">
              <Image src={QrCode} alt="company-name" fill={true} />
            </div>

            <div className="space-y-3">
              <a href="" target="_blank" className="block">
                <div className="w-[100px] h-[35px] relative">
                  <Image src={playStore} alt="company-name" fill={true} />
                </div>
              </a>

              <a href="" target="_blank" className="block">
                <div className="w-[100px] h-[35px] relative">
                  <Image src={appStore} alt="company-name" fill={true} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
