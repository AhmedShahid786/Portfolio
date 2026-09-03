export type AboutSegment =
  | string
  | { kind: "link"; text: string; href: string }
  | { kind: "emphasis"; text: string };

export type AboutBullet = {
  id: string;
  content: AboutSegment[];
};

export const ABOUT_BULLETS = [
  {
    id: "thinking",
    content: [
      "I am fascinated by computers and love building and breaking things.",
    ],
  },
  {
    id: "mindset",
    content: ["A generalist with a perfectionist mindset."],
  },
  {
    id: "intro",
    content: [
      "A Product minded engineer building and shipping products that solve real problems, reach real users, and move from idea to production.",
    ],
  },
  {
    id: "intro",
    content: [
      "Love to wear multiple hats across backend architecture, frontend engineering, polished product interfaces, infrastructure, and deployments. You name it!",
    ],
  },
] satisfies AboutBullet[];
