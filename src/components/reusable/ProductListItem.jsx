import React from "react";
import rastaurantImageThree from "/public/images/rastaurant-image-three.png";
import Image from "next/image";

const ProductListItem = () => {
  return (
    <div className="w-full">
      <div className="relative w-full aspect-video border rounded-[16px] overflow-hidden mb-3">
        <Image src={rastaurantImageThree} fill={true} />
      </div>

      <h4 className="font-secondary-font text-secondary-text text-2xl font-medium">
        Skateboard Shoe
      </h4>

      <p className="font-secondary-font text-tertiary-text text-lg">$125</p>
    </div>
  );
};

export default ProductListItem;
