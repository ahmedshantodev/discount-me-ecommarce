import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductListItem = ({ info, type }) => {
  return type === "primary" ? (
    <Link href={`/product-details/${info.id}`} className="block w-full">
      <div>
        <div className="relative w-full aspect-video border rounded-[16px] overflow-hidden mb-3">
          <Image src={info.thumbnail} alt={info.name} fill={true} />
        </div>

        <h4 className="font-secondary-font text-secondary-text text-2xl font-medium">
          {info.name}
        </h4>

        <p className="font-secondary-font text-tertiary-text text-lg">
          ${info.price}
        </p>
      </div>
    </Link>
  ) : (
    <Link href={`/product-details/${info.id}`} className="block w-full">
      <div>
        <div className="relative w-full aspect-video">
          <Image src={info.thumbnail} alt={info.name} fill={true} />
        </div>

        <div className="py-3 lg:py-4 2xl:py-6 px-5 lg:px-6 2xl:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-primary-font text-primary-text text-2xl sm:text-xl xl:text-2xl 2xl:text-[32px] font-medium 2xl:mb-1">
                {info.name}
              </h4>

              <p className="w-full font-secondary-font text-tertiary-text sm:text-sm xl:text-lg 2xl:text-xl line-clamp-1">
                {info.description}
              </p>
            </div>

            <p className="font-primary-font text-primary-text text-xl sm:text-lg xl:text-xl 2xl:text-[32px] font-medium">
              ${info.price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductListItem;
