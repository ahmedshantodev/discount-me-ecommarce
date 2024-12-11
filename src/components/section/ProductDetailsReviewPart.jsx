import React from "react";
import ReviewListItem from "../reusable/ReviewListItem";

const ProductDetailsReviewPart = ({ info }) => {
  return (
    <div>
      <h3 className="font-primary-font text-primary-text text-xl xl:text-4xl font-medium mb-7">
        Customer Feedback
      </h3>

      <div className="lg:w-[900px]">
        {info?.review.map((item, index) => (
          <ReviewListItem key={index} info={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsReviewPart;
