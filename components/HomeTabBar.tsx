import { productType } from "@/constants/data";
import Link from "next/link";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div
      className="
        flex flex-col gap-5 
        md:flex-row md:items-center md:justify-between
      "
    >
      {/* Mobile → grid, Desktop → flex */}
      <div
        className="
          grid grid-cols-2 gap-5 text-sm font-semibold
          md:flex md:items-center md:gap-3
        "
      >
        {productType?.map((item) => (
          <button
            onClick={() => onTabSelect(item?.title)}
            key={item?.title}
            className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect 
              ${
                selectedTab === item?.title
                  ? "bg-shop_light_green text-white border-shop_light_green"
                  : "bg-shop_light_green/20"
              }
            `}
          >
            {item?.title}
          </button>
        ))}
      </div>

      {/* See all → center on mobile */}

      <Link
        href={"/shop"}
        className="
          border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 text-center 
          rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect
        "
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;
