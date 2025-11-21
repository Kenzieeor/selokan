import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialsLink = [
  {
    title: "Github",
    href: "https://github.com/",
    icon: <Github className="w-4 h-4" />,
  },
  {
    title: "Linkedin",
    href: "https://id.linkedin.com/",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    title: "Facebook",
    href: "https://web.facebook.com/",
    icon: <Facebook className="w-4 h-4" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: <Instagram className="w-4 h-4" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3", className)}>
        {socialsLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <a
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
