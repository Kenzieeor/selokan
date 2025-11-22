import { productType } from "@/constants/data";
import { ChevronsRight } from "lucide-react";
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
        md:flex-row md:items-center md:justify-between mt-10
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
    group relative flex items-center justify-center w-full md:w-fit
    border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 
    text-center rounded-full 
    hover:bg-shop_light_green hover:border-shop_light_green hover:text-white
    hoverEffect
    transition-all duration-300
  "
      >
        <span className="transition-all duration-300 group-hover:pr-4">
          See all
        </span>

        <ChevronsRight
          className="
      hidden md:block
      absolute right-2 opacity-0 group-hover:opacity-100
      translate-x-1 group-hover:translate-x-0
      transition-all duration-300
    "
        />
      </Link>
    </div>
  );
};

export default HomeTabBar;
