import React from "react";
// react icons
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div className="w-full rounded-[40px] p-1 border border-primary-border relative ">
      <p className="inline-block bg-secondary-color text-white px-16 py-5 rounded-l-[40px] rounded-r-[4px] font-secondary-font text-xl leading-[110%]">
        Location
      </p>

      <button className="bg-secondary-color text-white text-3xl rounded-full p-2.5 absolute top-2/4 -translate-y-2/4 right-3">
        <IoIosSearch />
      </button>
    </div>
  );
};

export default SearchBox;
