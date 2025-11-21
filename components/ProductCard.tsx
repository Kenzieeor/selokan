import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div>
        {product?.images && (
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="ProductImage"
            loading="lazy"
            width={500}
            height={500}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
