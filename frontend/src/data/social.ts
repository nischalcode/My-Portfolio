import { personalInfo } from "./personal";

export const socialLinks = [
  {
    name: "GitHub",
    href: personalInfo.github,
  },
  {
    name: "LinkedIn",
    href: personalInfo.linkedin,
  },
  {
    name: "Email",
    href: `mailto:${personalInfo.email}`,
  },
];
