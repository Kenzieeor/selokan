"use client";

import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useClickOutSide } from "@/hooks";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideBarProps> = ({ isOpen, onClose }) => {
  const pathName = usePathname();
  const sideBarRef = useClickOutSide<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div
        ref={sideBarRef}
        className="min-w-[250px] max-w-20 bg-black text-white/70 h-screen px-5 py-10 border-r border-r-shop_dark_green flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-5">
          <Logo
            onClick={onClose}
            className="text-white"
            spanDesign="group-hover:text-white"
          />
          <button
            onClick={onClose}
            className="hover:text-shop_light_green hoverEffect"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-4 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              onClick={onClose}
              className={`hover:text-shop_light_green hoverEffect ${
                pathName === item?.href && "text-shop_light_green"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;
