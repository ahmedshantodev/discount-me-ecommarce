import React from "react";

const CouponCardsPage = () => {
  return (
    <section className="container py-10 px-28">
      <h4 className="text-black text-5xl font-primary-font mb-10">
        Coupon Cards
      </h4>

      <div className="flex items-center py-7 px-[120px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] mb-10">
        <div className="w-[30%] py-10 border-r-[5px] border-dashed border-[#e4e4e4]">
          <h3 className="text-secondary-color text-[60px] font-secondary-font leading-none mb-1">
            Price
          </h3>

          <h3 className="text-primary-color text-[66px] font-secondary-font font-medium leading-none">
            $ 10.99
          </h3>
        </div>

        <div className="w-[70%] pl-20">
          <h3 className="text-primary-text text-[50px] font-secondary-font leading-none">
            Single Discount
          </h3>

          <h3 className="text-tertiary-text text-[40px] font-secondary-font leading-none">
            Customer takes 6 discount
          </h3>
        </div>
      </div>

      <div className="flex items-center py-7 px-[120px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <div className="w-[30%] py-10 border-r-[5px] border-dashed border-[#e4e4e4]">
          <h3 className="text-secondary-color text-[60px] font-secondary-font leading-none mb-1">
            Price
          </h3>

          <h3 className="text-primary-color text-[66px] font-secondary-font font-medium leading-none">
            $ 34.99
          </h3>
        </div>

        <div className="w-[70%] pl-20">
          <h3 className="text-primary-text text-[50px] font-secondary-font leading-none">
            Unlimited Discount
          </h3>

          <h3 className="text-tertiary-text text-[40px] font-secondary-font leading-none">
            Customer get unlimited discount in one month
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CouponCardsPage;
