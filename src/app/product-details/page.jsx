import React from "react";
import Image from "next/image";
import rastaurantImageOne from "/public/images/rastaurant-image-four.jpg";
// images
import milkIcon from "/public/images/milk-icon.png";
import tShirtIcon from "/public/images/t-shirt-icon.png";
import dessertICon from "/public/images/dessert-icon.png";
import toyIcon from "/public/images/toy-icon.png";
import bookIcon from "/public/images/book-icon.png";
import noodlesIcon from "/public/images/noodles-icon.png";
import riceIcon from "/public/images/rice-icon.png";
import productListInfo from "@/data/productListInfo";
import Link from "next/link";
import ProductListItem from "@/components/reusable/ProductListItem";

const ProductDetailsPage = () => {
  let items = [
    { name: "Milk", image: milkIcon },
    { name: "T Shirt", image: tShirtIcon },
    { name: "Dessert", image: dessertICon },
    { name: "Toy", image: toyIcon },
    { name: "Book", image: bookIcon },
    { name: "Noodles", image: noodlesIcon },
    { name: "Rice", image: riceIcon },
  ];

  return (
    <section className="container py-16">
      <div className="flex flex-wrap gap-2.5 sm:gap-3 lg:gap-5 mb-8 2xl:mb-16">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[100px] sm:w-[90px] lg:w-[120px] aspect-square flex items-center justify-center rounded-[14px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
          >
            <div className="text-center">
              <div className="w-[35px] lg:w-[45px] mx-auto relative mb-1">
                <Image src={item.image} alt={item.name} fill={false} />
              </div>

              <p className="font-font text-primary-text lg:text-xl font-semibold">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:flex flex-wrap gap-2.5 lg:gap-5">
        {productListInfo.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[49%] lg:w-[32%] rounded-[14px] overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mb-5 sm:mb-0"
          >
            <ProductListItem type={"secondary"} info={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetailsPage;
