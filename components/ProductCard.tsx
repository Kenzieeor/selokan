import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToWishListButton from "./AddToWishListButton";

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
          <Link
            href={"/deal"}
            className="absolute top-2 left-2 z-10 text-xs border border-shop_orange/50 
          p-1 rounded-full group-hover:border-shop_orange
        group-hover:text-shop_dark_green hoverEffect"
          >
            <Flame
              size={18}
              fill="#fb6c08"
              className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
            />
          </Link>
        )}
      </div>
      <div className="p-3">
        {product?.categories && (
          <p>{product?.categories.map((cat) => cat).join(", ")}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
