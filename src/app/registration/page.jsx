import Breadcrumbs from "@/components/reusable/Breadcrumbs";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import AuthPartInput from "@/components/reusable/AuthPartInput";
import { FcGoogle } from "react-icons/fc";

const RagistrationPage = () => {
  return (
    <section>
      <Breadcrumbs>
        <Link href={"/"}>
          <IoHomeOutline className="text-lg lg:text-2xl" />
        </Link>

        <IoIosArrowForward className="lg:text-xl" />

        <p className="font-primary-font lg:text-xl font-medium">
          Create Account
        </p>
      </Breadcrumbs>

      <div className="container py-7 lg:py-16">
        <div className="w-[90%] md:w-[500px] mx-auto rounded-xl p-7 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <h4 className="font-primary-font text-primary-text font-medium text-xl lg:text-2xl xl:text-3xl text-center mb-5">
            Create Account
          </h4>

          <div>
            <div className="mb-4">
              <AuthPartInput placeholder={"Email"} />
            </div>

            <div className="mb-5">
              <AuthPartInput type={"password"} placeholder={"Password"} />
            </div>

            <div className="mb-5">
              <AuthPartInput
                type={"password"}
                placeholder={"Confirm password"}
              />
            </div>

            <div className="flex items-center justify-between mb-3 lg:mb-7">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  name="terms-conditions"
                  id="remember-me"
                />

                <label
                  htmlFor="terms-conditions"
                  className="font-primary-font lg:text-lg text-[#666666]"
                >
                  Accept all terms & Conditions
                </label>
              </div>
            </div>

            <button className="w-full py-2 lg:py-3 font-primary-font lg:text-xl text-white bg-primary-color rounded-[40px] mb-3">
              Login
            </button>

            <button className="w-full flex items-center justify-center gap-x-2.5 py-2 lg:py-3 font-primary-font lg:text-xl bg-white rounded-[40px] mb-6 border-2 border-[#ececec]">
              <FcGoogle className="text-2xl"/> Continue with Google
            </button>

            <div className="text-center">
              <Link
                href={"/login"}
                className="font-primary-font lg:text-lg text-[#666666] hover:underline"
              >
                Alread have account? <span className="text-black">Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RagistrationPage;
