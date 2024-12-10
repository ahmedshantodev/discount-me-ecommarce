import React from "react";
import InputField from "../reusable/InputField";
import countryList from "@/data/countryList";
import state from "@/data/state";

const ChackOutLeftPart = () => {
  return (
    <div className="w-full">
      <h4 className="font-primary-font text-2xl md:text-3xl 2xl:text-[48px] leading-[140%] text-primary-text font-medium mb-10">
        Billing Information
      </h4>

      <div className="sm:flex max-md:flex-wrap gap-x-5">
        <div className="w-full sm:w-[48%] md:w-1/3 lg:w-1/3 mb-3 lg:mb-0">
          <InputField
            label={"First name"}
            type={"text"}
            id={"firstName"}
            placeholder={"Enter your first name"}
          />
        </div>

        <div className="w-full sm:w-[48%] md:w-1/3 lg:w-1/3 mb-3 lg:mb-0">
          <InputField
            label={"Last name"}
            type={"text"}
            id={"lastName"}
            placeholder={"Enter your last name"}
          />
        </div>

        <div className="w-full md:w-1/3 lg:w-1/3 mb-3 lg:mb-0">
          <InputField
            label={"company name (optional)"}
            type={"text"}
            id={"companyName"}
            placeholder={"Enter your company name"}
          />
        </div>
      </div>

      <div className="w-full mt-5 sm:flex max-md:flex-wrap gap-x-5">
        <div className="w-full sm:w-[48%] lg:w-1/2">
          <InputField
            label={"email"}
            type={"text"}
            id={"email"}
            placeholder={"Enter your email"}
          />
        </div>

        <div className="w-full sm:w-[48%] lg:w-1/2">
          <InputField
            label={"phone number"}
            type={"number"}
            id={"number"}
            placeholder={"Enter your number"}
          />
        </div>
      </div>

      <div className="w-full mt-5">
        <InputField
          label={"street Address"}
          type={"text"}
          id={"streetAddress"}
          placeholder={"street number"}
        />
      </div>

      <div className="w-full mt-5 sm:flex max-md:flex-wrap gap-x-5">
        <div className="w-full sm:w-[48%] lg:w-1/2">
          <label
            htmlFor={"country"}
            className="block font-primary-font lg:text-lg text-primary-text mb-2"
          >
            Country
          </label>

          <select
            name="country"
            id="country"
            className="w-full bg-white border border-[#ebebeb] rounded-md py-2 lg:py-4 px-4 lg:px-5 lg:text-lg placeholder:text-[#999999] outline-2 outline-primary-border"
          >
            <option value="">select</option>
            {countryList.map((item, index) => (
              <option key={index} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full sm:w-[48%] lg:w-1/2 mt-3 sm:mt-0">
          <label
            htmlFor={"country"}
            className="block font-primary-font lg:text-lg text-primary-text mb-2"
          >
            State
          </label>

          <select
            name="country"
            id="country"
            className="w-full bg-white border border-[#ebebeb] rounded-md py-2 lg:py-4 px-4 lg:px-5 lg:text-lg placeholder:text-[#999999] outline-2 outline-primary-border"
          >
            <option value="">select</option>
            {state.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ChackOutLeftPart;
