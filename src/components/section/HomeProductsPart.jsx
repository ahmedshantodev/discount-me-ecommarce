import React from "react";
import ProductListItem from "@/components/reusable/ProductListItem";
import productListInfo from "@/data/productListInfo";

const HomeProductsPart = () => {
  return (
    <section className="container py-10 xl:py-16">
      <h3 className="font-secondary-font font-bold text-center sm:text-start text-2xl xl:text-[40px] text-primary-text leading-[110%] mb-8">
        Products
      </h3>

      <div className="flex flex-wrap gap-5 sm:gap-3 xl:gap-3">
        {productListInfo.map((item, index) => (
          <div key={index} className="w-full sm:w-[49%] lg:w-[32.5%]">
            <ProductListItem type={"primary"} info={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProductsPart;
