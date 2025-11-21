import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";

interface Props {
  className?: string;
}

const SignIn = ({ className }: Props) => {
  return (
    <SignInButton mode="modal">
      <div className="text-sm font-semibold hover:text-darkColor hoverEffect text-lightColor cursor-pointer">
        <Button size="sm" className={cn("font-semibold", className)}>
          Sign In
        </Button>
      </div>
    </SignInButton>
  );
};

export default SignIn;
