"use client";

import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto flex items-center gap-1 md:gap-0 justify-start">
          <MobileMenu />
          <Logo />
        </div>

        <HeaderMenu />

        <div className="w-auto flex items-center justify-end gap-3 md:gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignIn />
          </SignedOut>
        </div>
      </Container>
    </header>
  );
};

export default Header;
