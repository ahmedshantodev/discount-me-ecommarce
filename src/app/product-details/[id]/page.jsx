import React from "react";
// react icons
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import ProductDetailsTopLeftPart from "@/components/section/ProductDetailsTopLeftPart";
import ProductDetailsTopRightPart from "@/components/section/ProductDetailsTopRightPart";
import ProductDetailsReviewPart from "@/components/section/ProductDetailsReviewPart";
import Link from "next/link";
import productListInfo from "@/data/productListInfo";

const ProductDetailsPage = ({ params }) => {
  // getting active product all information
  const { id } = params;
  const data = productListInfo.filter((item) => {
    return id == item.id;
  });

  const productInfo = data[0];

  return (
    <section>
      <div className="bg-product-details-top-part-bg bg-no-repeat bg-cover py-4 lg:py-12 text-white">
        <div className="container flex items-center gap-x-4">
          <Link href={"/"}>
            <IoHomeOutline className="text-lg lg:text-2xl" />
          </Link>

          <IoIosArrowForward className="lg:text-xl" />

          <p className="font-primary-font lg:text-xl font-medium">Categories</p>

          <IoIosArrowForward className="lg:text-xl" />

          <p className="font-primary-font lg:text-xl text-primary-color font-medium">
            Details
          </p>
        </div>
      </div>

      <div className="container py-5 lg:py-11">
        <div className="lg:flex gap-x-7 mb-16">
          <div className="w-full lg:w-2/4 mb-5 lg:mb-0">
            <ProductDetailsTopLeftPart info={productInfo} />
          </div>

          <div className="w-full lg:w-2/4">
            <ProductDetailsTopRightPart info={productInfo} />
          </div>
        </div>

        <div>
          <ProductDetailsReviewPart info={productInfo} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
