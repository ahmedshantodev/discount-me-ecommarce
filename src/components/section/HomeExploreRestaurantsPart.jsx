import Link from "next/link";
import React from "react";
// react icons
import { IoIosArrowForward } from "react-icons/io";
// reusable components
import RastaurantsListItem from "@/components/reusable/RastaurantsListItem";
// rastaurant list
import rastaurantListInfo from "@/data/rastaurantListInfo";

const HomeExploreRestaurantsPart = () => {
  return (
    <section className="container py-10 xl:py-16 border-b">
      <div className="sm:flex items-center sm:text-start justify-between mb-12 text-center lg:text-start">
        <div className="mb-2 lg:mb-0">
          <h4 className="font-primary-font text-secondary-text font-medium text-2xl xl:text-3xl 2xl:text-[48px] mb-1 lg:mb-2">
            Explore <span className="text-primary-color">Top Restaurants</span>
          </h4>

          <p className="text-tertiary-text font-secondary-font text-lg xl:text-xl 2xl:text-2xl">
            Check your city Near by Restaurant
          </p>
        </div>

        <Link
          href={"/explore-restaurants"}
          className="inline-block text-center"
        >
          <p className="flex items-center gap-x-2 font-secondary-font lg:text-xl text-primary-text hover:underline">
            See all <IoIosArrowForward />
          </p>
        </Link>
      </div>

      <div className="sm:flex sm:flex-wrap lg:flex-row gap-3 2xl:gap-14">
        {rastaurantListInfo.filter(item => item.isFeatured === true).map((item) => (
          <div key={item.id} className="w-full sm:w-[49%] lg:w-[32%] xl:w-[30.5%] mb-5 sm:mb-0">
            <RastaurantsListItem info={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeExploreRestaurantsPart;
