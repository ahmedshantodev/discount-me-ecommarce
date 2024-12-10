import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductListItem = ({ info }) => {
  return (
    <Link href={`/product-details/${info.id}`} className="block">
      <div className="w-full">
        <div className="relative w-full aspect-video border rounded-[16px] overflow-hidden mb-3">
          <Image src={info.thumbnail} alt="Skateboard Shoe" fill={true} />
        </div>

        <h4 className="font-secondary-font text-secondary-text text-2xl font-medium">
          {info.name}
        </h4>

          <p className="font-secondary-font text-tertiary-text text-lg">{info.price}</p>
      </div>
    </Link>
  );
};

export default ProductListItem;
