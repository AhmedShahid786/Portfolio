export type ExperienceTech = { name: string; src: string };

export type Work = { name: string; downloads: string; src: string };

export type Entry = {
  company: string;
  companyUrl?: string;
  logo?: string;
  role: string;
  mode?: string;
  period?: string;
  summary?: string;
  stack: ExperienceTech[];
  projects: Work[];
};

export const EXPERIENCE = [
  {
    company: "Saylani Welfare International",
    logo: "/images/companies/saylani-tech.png",
    role: "Software Engineer",
    mode: "Onsite",
    period: "Feb 2025 — Present",
    stack: [
      { name: "React", src: "/images/tech/react.png" },
      { name: "Aws", src: "/images/tech/aws.svg" },
      { name: "CICD", src: "/images/tech/github-actions.svg" },
      { name: "Redux", src: "/images/tech/redux.png" },
      { name: "shadcn Ui", src: "/images/tech/shadcn.svg" },
    ],
    projects: [],
  },
  {
    company: "KAACIB",
    role: "Software Engineer",
    mode: "Hybrid",
    period: "May 2024 — Feb 2025",
    stack: [],
    projects: [],
  },
  {
    company: "Islamic Desk",
    logo: "/images/companies/islamic-desk.png",
    role: "Software Engineer Intern",
    mode: "Onsite",
    period: "Feb 2023 — May 2024",
    summary:
      "I worked as a Software Engineer at Islamic Desk, contributing to the " +
      "development of Seerat ki Duniya, Nahw Ki Duniya, and Surf Ki Duniya. " +
      "My role involved creating effective solutions and working with the team " +
      "to introduce new functionalities.",
    stack: [
      { name: "React", src: "/images/tech/react.png" },
      { name: "Firebase", src: "/images/tech/firebase.svg" },
      { name: "CICD", src: "/images/tech/laravel.png" },
      { name: "Next JS", src: "/images/tech/nodejs.png" },
    ],
    projects: [
      {
        name: "Seerat Ki Dunya",
        downloads: "20K+",
        src: "/images/work/seerat-ki-dunya.png",
      },
      {
        name: "Nahw Ki Dunya",
        downloads: "50K+",
        src: "/images/work/nahw-ki-dunya.png",
      },
      {
        name: "Sarf Ki Dunya",
        downloads: "10k+",
        src: "/images/work/sarf-ki-dunya.png",
      },
    ],
  },
] satisfies Entry[];
