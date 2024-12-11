import React from "react";

const Breadcrumbs = ({children}) => {
  return (
    <div className="bg-product-details-top-part-bg bg-no-repeat bg-cover py-4 lg:py-12 text-white">
      <div className="container flex items-center gap-x-4">
        {children}
      </div>
    </div>
  );
};

export default Breadcrumbs;
