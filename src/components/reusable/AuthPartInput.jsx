"use client";

import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const AuthPartInput = ({ id, name, onChange, placeholder, type }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  return (
    <div className="relative">
      {type === "password" ? (
        <input
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={isPasswordShow ? "text" : "password"}
          className="w-full border-2 border-[#ececec] rounded-md bg-white text-[#999999] py-2.5 xl:py-4 px-6 lg:text-xl outline-2 outline-[#ececec]"
        />
      ) : (
        <input
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type ? type : "text"}
          className="w-full border-2 border-[#ececec] rounded-md bg-white text-[#999999] py-2.5 lg:py-4 px-6 lg:text-xl outline-2 outline-[#ececec]"
        />
      )}

      {type === "password" &&
        (isPasswordShow ? (
          <button
            onClick={() => setIsPasswordShow(!isPasswordShow)}
            className="absolute top-2/4 -translate-y-2/4 right-5 lg:text-xl"
          >
            <FaRegEye />
          </button>
        ) : (
          <button
            onClick={() => setIsPasswordShow(!isPasswordShow)}
            className="absolute top-2/4 -translate-y-2/4 right-5 lg:text-xl"
          >
            <FaRegEyeSlash />
          </button>
        ))}
    </div>
  );
};

export default AuthPartInput;
