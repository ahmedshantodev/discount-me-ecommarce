import React from "react";
import Modal from "../reusable/Modal";
import { RxCross2 } from "react-icons/rx";
import successIcon from "/public/images/success-icon.png";
import Image from "next/image";
import QrCode from "/public/images/app-download-qr-code.png";
import playStore from "/public/images/download-playstore.png";
import appStore from "/public/images/download-appstore.png";

const OrderSuccessModal = ({ show, setShow }) => {
  return (
    <Modal
      show={show}
      setShow={setShow}
      className={"p-8 rounded-md w-[400px] relative text-center"}
    >
      <button
        onClick={() => setShow(false)}
        className="bg-white border rounded-full p-2 text-2xl absolute right-3 top-3"
      >
        <RxCross2 />
      </button>

      <div className="w-[70px] mx-auto aspect-square relative mb-4">
        <Image src={successIcon} alt="" fill={true} />
      </div>

      <h4 className="text-black text-2xl font-secondary-font font-semibold border-b border-primary-border/50 pb-4 mb-5">
        Order Successfully
      </h4>

      <p className="font-primary-font text-tertiary-text mb-4">
        If you want to tracking your order please install our app from Play
        store or App store
      </p>

      <h4 className="text-black text-2xl font-secondary-font font-medium mb-5">
        Download app
      </h4>

      <div className="flex justify-center">
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
    </Modal>
  );
};

export default OrderSuccessModal;
