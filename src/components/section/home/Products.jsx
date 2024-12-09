import React from "react";
import ProductListItem from "@/components/reusable/ProductListItem";

const Products = () => {
  return (
    <section className="container py-16">
      <h3 className="font-secondary-font font-bold text-[40px] text-primary-text leading-[110%] mb-8">
        Products
      </h3>

      <div className="flex flex-wrap gap-3">
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
        <div className="w-[32.5%]">
          <ProductListItem />
        </div>
      </div>
    </section>
  );
};

export default Products;
