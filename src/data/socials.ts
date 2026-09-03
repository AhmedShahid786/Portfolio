import { EMAIL_HREF, GITHUB_PROFILE_URL } from "@/lib/site-config";

export type SocialLink = {
  name: string;
  title: string;
  href: string;
  handle?: string;
};

export const SOCIAL_LINKS = [
  {
    name: "github",
    title: "GitHub",
    href: GITHUB_PROFILE_URL,
    handle: "AhmedShahid786",
  },
  {
    name: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmedshahid786",
    handle: "ahmedshahid786",
  },
  {
    name: "x",
    title: "X",
    href: "https://x.com/ahmedshahid7866",
    handle: "ahmedshahid7866",
  },
  {
    name: "medium",
    title: "Medium",
    href: "https://medium.com/@ahmedshahid786",
    handle: "ahmedshahid786",
  },
  { name: "email", title: "Email", href: EMAIL_HREF },
] as const satisfies readonly SocialLink[];

export type SocialName = (typeof SOCIAL_LINKS)[number]["name"];
