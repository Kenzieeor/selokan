import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToWishListButton from "./AddToWishListButton";
import { SubTitle, Title } from "./ui/text";
import PriceView from "./PriceView";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border-[1px] border-dark_blue/20 rounded-lg bg-white group">
      <div className="relative group overflow-hidden bg-shop_light_bg rounded-t-lg">
        {product?.images && (
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="ProductImage"
            loading="lazy"
            width={500}
            height={500}
            className={`w-full h-64 object-contain overflow-hidden transition-transform
               bg-shop_light_bg hoverEffect ${
                 product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"
               }`}
          />
        )}

        <AddToWishListButton product={product} />

        {product?.status === "sale" && (
          <p
            className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 
          px-2 rounded-full group-hover:border-shop_light_green
        group-hover:text-shop_light_green hoverEffect"
          >
            Sale!
          </p>
        )}

        {product?.status === "new" && (
          <p
            className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 
          px-2 rounded-full group-hover:border-shop_light_green
        group-hover:text-shop_light_green hoverEffect"
          >
            New!
          </p>
        )}

        {product?.status === "hot" && (
          <Link href={"/deal"} className="absolute top-1 left-1 z-10">
            <button className="text-shop_orange/50 p-1.5 hover:bg-darkColor rounded-full hoverEffect">
              <Flame size={18} fill="#fb6c08" />
            </button>
          </Link>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs text-shop_light_text">
            {product?.categories.map((cat) => cat).join(", ")}
          </p>
        )}
        <Title className="text-sm line-clamp-1">{product?.name}</Title>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                size={12}
                key={index}
                className={
                  index < 4 ? "text-shop_lighter_green" : "text-shop_light_text"
                }
                fill={index < 4 ? "#93d991" : "#ababab"}
              />
            ))}
          </div>
          <p className="text-shop_light_text text-xs tracking-wide">
            5 Reviews
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium">In Stock</p>
          <p
            className={`${
              product?.stock === 0
                ? "text-red-600"
                : "text-shop_light_green/80 font-semibold"
            }`}
          >
            {(product?.stock as number) > 0 ? product?.stock : "unavaible"}
          </p>
        </div>
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />
      </div>
    </div>
  );
};

export default ProductCard;
