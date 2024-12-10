import Breadcrumbs from "@/components/reusable/Breadcrumbs";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import AuthPartInput from "@/components/reusable/AuthPartInput";
import { FcGoogle } from "react-icons/fc";

const ForgetPasswordPage = () => {
  return (
    <section>
      <Breadcrumbs>
        <Link href={"/"}>
          <IoHomeOutline className="text-lg lg:text-2xl" />
        </Link>

        <IoIosArrowForward className="lg:text-xl" />

        <p className="font-primary-font lg:text-xl font-medium">
          Forgot password
        </p>
      </Breadcrumbs>

      <div className="container py-7 lg:py-16">
        <div className="w-[90%] md:w-[500px] mx-auto rounded-xl p-7 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <h4 className="font-primary-font text-primary-text font-medium text-xl lg:text-2xl xl:text-3xl text-center mb-5">
            Forgot password
          </h4>

          <div>
            <div className="mb-4">
              <AuthPartInput placeholder={"Email"} />
            </div>

            <button className="w-full py-2 lg:py-3 font-primary-font lg:text-xl text-white bg-primary-color rounded-[40px] mb-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPasswordPage;
