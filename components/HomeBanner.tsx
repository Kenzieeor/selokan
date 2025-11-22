"use client";

import { useState, useEffect } from "react";
import { useSwipe } from "@/hooks/useSwipe";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";
import { product_1, product_25, product_3 } from "@/images";

const slides = [
  {
    id: 1,
    title: (
      <>
        Grab Up to 50% off on <br /> Selected headphones
      </>
    ),
    image: product_1,
  },
  {
    id: 2,
    title: (
      <>
        Summer Deals Are Here <br /> Get Exclusive Discounts
      </>
    ),
    image: product_25,
  },
  {
    id: 3,
    title: (
      <>
        New Arrivals Just Dropped <br /> Shop the Latest Gear
      </>
    ),
    image: product_3,
  },
];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Pakai custom hook swipe
  const swipe = useSwipe(
    () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)), // swipe left = next
    () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1)) // swipe right = prev
  );

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-shop_light_pink py-5 md:py-0"
      {...swipe} // ⬅ inject semua event dari hook
    >
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex w-full flex-shrink-0 items-center justify-between px-4 lg:px-24"
          >
            <div>
              <Title className="mb-5">{slide.title}</Title>

              <Link
                href={"/shop"}
                className="bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect"
              >
                Buy Now
              </Link>
            </div>

            <div>
              <Image
                src={slide.image}
                alt="banner"
                className="hidden w-70 md:inline-flex"
              />
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 w-1 rounded-full transition-all ${
              current === idx ? "bg-shop_dark_green scale-125" : "bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
