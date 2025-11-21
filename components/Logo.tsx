import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const sizeClasses = {
  sm: "text-[15px] md:text-[16px]",
  md: "text-xl md:text-2xl",
  lg: "text-3xl md:text-4xl",
};

const Logo = ({
  className,
  spanDesign,
  size = "md",
  onClick,
}: {
  className?: string;
  spanDesign?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}) => {
  return (
    <Link href={"/"} className="inline-flex">
      <h2
        onClick={onClick}
        className={cn(
          "font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans",
          sizeClasses[size],
          className
        )}
      >
        Shopcar
        <span
          className={cn(
            "text-shop_light_green group-hover:text-shop_dark_green hoverEffect",
            spanDesign
          )}
        >
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
