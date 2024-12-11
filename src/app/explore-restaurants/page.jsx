import RastaurantsListItem from "@/components/reusable/RastaurantsListItem";
import SearchBox from "@/components/reusable/SearchBox";
import rastaurantListInfo from "@/data/rastaurantListInfo";
import React from "react";

const ExploreRestaurantsPage = () => {
  return (
    <section className="container py-7 2xl:py-16 border-b">
      <div className="lg:flex items-center justify-between mb-5 xl:mb-12">
        <div className="mb-2 lg:mb-0 text-center lg:text-start">
          <h4 className="font-primary-font text-secondary-text font-medium text-2xl xl:text-3xl 2xl:text-[48px] mb-1 lg:mb-2">
            Explore <span className="text-primary-color">Top Restaurants</span>
          </h4>

          <p className="text-tertiary-text font-secondary-font text-lg xl:text-xl 2xl:text-2xl">
            Check your city Near by Restaurant
          </p>
        </div>

        <div className="w-full sm:w-[85%] mx-auto lg:mx-0 md:w-[500px] lg:w-[550px] xl:w-[550px] 2xl:w-[700px]">
          <SearchBox />
        </div>
      </div>

      <div className="flex gap-3 lg:gap-5 xl:gap-14 flex-wrap">
        {rastaurantListInfo.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[49%] lg:w-[32%] xl:w-[30%]"
          >
            <RastaurantsListItem info={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreRestaurantsPage;
