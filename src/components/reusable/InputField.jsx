import React from "react";

const InputField = ({ label, type, name, id, placeholder, onChange }) => {
  return (
    <div  className="w-full">
      <label
        htmlFor={id}
        className="block font-primary-font lg:text-lg text-primary-text mb-2"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        onChange={onChange}
        type={type ? type : "text"}
        placeholder={placeholder}
        className="w-full bg-white border border-[#ebebeb] rounded-md py-2 lg:py-4 px-4 lg:px-5 lg:text-lg placeholder:text-[#999999] outline-2 outline-primary-border"
      />
    </div>
  );
};

export default InputField;
