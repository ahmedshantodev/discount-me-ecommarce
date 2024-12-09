import RastaurantsListItem from "@/components/reusable/RastaurantsListItem";
import SearchBox from "@/components/reusable/SearchBox";
import rastaurantListInfo from "@/data/rastaurantListInfo";
import React from "react";

const ExploreRestaurantsPage = () => {
  return (
    <section className="container py-16 border-b">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h4 className="font-primary-font text-secondary-text font-medium text-[48px] mb-2">
            Explore <span className="text-primary-color">Restaurants</span>
          </h4>

          <p className="text-tertiary-text font-secondary-font text-2xl">
            Check your city Near by Restaurant
          </p>
        </div>

        <div className="w-[700px]">
          <SearchBox />
        </div>
      </div>

      <div className="flex gap-14 flex-wrap">
        {rastaurantListInfo.map((item) => (
          <div key={item.id} className="w-[30.5%]">
            <RastaurantsListItem info={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreRestaurantsPage;
