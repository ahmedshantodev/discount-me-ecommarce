"use client";

import useCheckOutSideClick from "@/helper-function/checkOutSideClick";
import React, { useRef } from "react";

const Modal = ({ show, setShow, className, children }) => {
  const modalRef = useRef();

  useCheckOutSideClick(modalRef, () => {
    setShow(false);
  });

  return (
    <div
      className={
        show
          ? "fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          : "hidden"
      }
    >
      <div ref={modalRef} className={`bg-white ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
