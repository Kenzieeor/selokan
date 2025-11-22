import { defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const userType = defineType({
  name: "user",
  title: "User",
  type: "document",
  icon: UserIcon, // ← ini tambahan icon
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
    },
  ],
});
