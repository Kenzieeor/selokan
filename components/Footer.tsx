import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div className="space-y-4">
            <Logo />

            <SubText>
              Discover curated furniture collections at Shopcartyt, blending
              style and comfort to elevate your living spaces.
            </SubText>

            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_dark_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>

          <div>
            <SubTitle>Browse</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li
                  key={item?.title}
                  className="transition-transform duration-300 hover:translate-x-1"
                >
                  <Link
                    key={item?.title}
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect text-[15px]"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li
                  key={item?.title}
                  className="transition-transform duration-300 hover:translate-x-1"
                >
                  <Link
                    key={item?.title}
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect text-[15px]"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText>
              Subscibe to our newslatter to receive updates and exclusive offers
            </SubText>
            <form className="space-y-3">
              <input
                placeholder="Enter your email"
                type="email"
                required
                className="w-full border-2 border-gray-800/80 px-4 py-2 rounded-lg "
              />
              <Button size="lg" className="w-full py-[21px]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-gray-600">
          <div className="font-semibold">
            © {new Date().getFullYear()} <Logo size="sm" />. All rights
            reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
