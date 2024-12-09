import Link from "next/link";
import React from "react";
// react icons
import { IoIosArrowForward } from "react-icons/io";
// reusable components
import RastaurantsListItem from "@/components/reusable/RastaurantsListItem";
// rastaurant list
import rastaurantListInfo from "@/data/rastaurantListInfo";

const ExploreRestaurants = () => {
  return (
    <section className="container py-16 border-b">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h4 className="font-primary-font text-secondary-text font-medium text-[48px] mb-2">
            Explore <span className="text-primary-color">Top Restaurants</span>
          </h4>

          <p className="text-tertiary-text font-secondary-font text-2xl">
            Check your city Near by Restaurant
          </p>
        </div>

        <Link
          href={"/explore-restaurants"}
          className="flex items-center gap-x-2 font-secondary-font text-xl text-primary-text hover:underline"
        >
          See all <IoIosArrowForward />
        </Link>
      </div>

      <div className="flex gap-14">
        {rastaurantListInfo.filter(item => item.isFeatured === true).map((item) => (
          <div key={item.id} className="w-[30.5%]">
            <RastaurantsListItem info={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreRestaurants;
