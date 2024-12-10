import Image from "next/image";
import React from "react";
// react icons
import { MdOutlineStar } from "react-icons/md";

const ReviewListItem = ({ info }) => {
  return (
    <div className="pb-5 mb-5 border-b border-primary-border/50">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-x-4">
          <div className="w-[45px] lg:w-[56px] aspect-square relative rounded-full overflow-hidden">
            <Image
              src={info?.image}
              alt={info?.name}
              fill={true}
            />
          </div>

          <div>
            <p className="font-primary-font text-lg text-primary-text font-medium">
              {info?.name}
            </p>

            <div className="flex items-center">
              <MdOutlineStar className="text-xl text-primary-color" />
              <MdOutlineStar className="text-xl text-primary-color" />
              <MdOutlineStar className="text-xl text-primary-color" />
              <MdOutlineStar className="text-xl text-primary-color" />
              <MdOutlineStar className="text-xl text-primary-color" />
            </div>
          </div>
        </div>

        <p className="font-secondary-font text-tertiary-text text-lg">
          {info?.time}
        </p>
      </div>

      <p className="font-secondary-font text-tertiary-text text-lg">
        {info?.review}
      </p>
    </div>
  );
};

export default ReviewListItem;
