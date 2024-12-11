import Image from "next/image";
// react icons
import { FaStar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

const RastaurantsListItem = ({ info }) => {
  return (
    <div className="w-full border border-primary-border rounded-[24px] p-4">
      <div className="relative w-full aspect-video rounded-[16px] overflow-hidden mb-3">
        <Image src={info?.thumbnail} alt="alt-text" fill={true} />
      </div>

      <div className="flex items-center justify-between mb-3">
        <h4 className="font-primary-font text-xl 2xl:text-[32px] leading-[110%] text-secondary-text">
          {info.name}
        </h4>

        <p className="flex items-center gap-x-2 font-secondary-font text-base 2xl:text-2xl">
          <FaStar className="text-[#ffc60b] text-base 2xl:text-[28px]" /> (
          {info.rating})
        </p>
      </div>

      <p className="flex items-center gap-x-2.5 font-secondary-font font-medium text-sm 2xl:text-xl text-secondary-text mb-3">
        <CiLocationOn className="text-lg 2xl:text-[27px]" /> {info.locatioin}
      </p>

      <p className="font-secondary-font text-tertiary-text line-clamp-3 mb-3 text-xs 2xl:text-base">
        {info.description}
      </p>

      <a
        href={`/explore-restaurants/${info.id}`}
        className="block text-center bg-secondary-color w-full py-1 2xl:py-2.5 text-white rounded-[8px] font-secondary-font font-medium text-sm lg:text-lg active:scale-[0.98] transition-all"
      >
        Vist
      </a>
    </div>
  );
};

export default RastaurantsListItem;
