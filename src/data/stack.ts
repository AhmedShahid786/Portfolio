export type StackTech = {
  key: string;
  title: string;
  href: string;
  icon: string;
  color: string;
};

export type StackGroup = {
  category: string;
  items: StackTech[];
};

export const STACK = [
  {
    category: "Languages",
    items: [
      {
        key: "typescript",
        title: "TypeScript",
        href: "https://www.typescriptlang.org",
        icon: "/icons/typescript.svg",
        color: "#3178C6",
      },
      {
        key: "javascript",
        title: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: "/icons/javascript.svg",
        color: "#F7DF1E",
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        key: "react",
        title: "React",
        href: "https://react.dev",
        icon: "/icons/react.svg",
        color: "#61DAFB",
      },
      {
        key: "nextjs",
        title: "Next.js",
        href: "https://nextjs.org",
        icon: "/icons/nextdotjs.svg",
        color: "var(--primary)",
      },
      {
        key: "expo",
        title: "Expo",
        href: "https://expo.dev",
        icon: "/icons/expo.svg",
        color: "var(--primary)",
      },
      {
        key: "redux",
        title: "Redux",
        href: "https://redux.js.org",
        icon: "/icons/redux.svg",
        color: "#764ABC",
      },
      {
        key: "tanstack",
        title: "TanStack",
        href: "https://tanstack.com",
        icon: "/icons/tanstack.svg",
        color: "#ECE8D1",
      },
      {
        key: "tailwindcss",
        title: "Tailwind CSS",
        href: "https://tailwindcss.com",
        icon: "/icons/tailwindcss.svg",
        color: "#06B6D4",
      },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      {
        key: "nodejs",
        title: "Node.js",
        href: "https://nodejs.org",
        icon: "/icons/nodedotjs.svg",
        color: "#5FA04E",
      },
      {
        key: "expressjs",
        title: "Express.js",
        href: "https://expressjs.com",
        icon: "/icons/express.svg",
        color: "var(--primary)",
      },
      {
        key: "nestjs",
        title: "NestJS",
        href: "https://nestjs.com",
        icon: "/icons/nestjs.svg",
        color: "#E0234E",
      },
      {
        key: "postgresql",
        title: "PostgreSQL",
        href: "https://www.postgresql.org",
        icon: "/icons/postgresql.svg",
        color: "#4169E1",
      },
      {
        key: "mongodb",
        title: "MongoDB",
        href: "https://www.mongodb.com",
        icon: "/icons/mongodb.svg",
        color: "#47A248",
      },
      {
        key: "redis",
        title: "Redis",
        href: "https://redis.io",
        icon: "/icons/redis.svg",
        color: "#FF4438",
      },
    ],
  },
  {
    category: "DevOps",
    items: [
      {
        key: "vercel",
        title: "Vercel",
        href: "https://vercel.com",
        icon: "/icons/vercel.svg",
        color: "var(--primary)",
      },
      {
        key: "github-actions",
        title: "CI/CD",
        href: "https://github.com/features/actions",
        icon: "/icons/githubactions.svg",
        color: "#2088FF",
      },
      {
        key: "linux",
        title: "Linux",
        href: "https://www.kernel.org",
        icon: "/icons/linux.svg",
        color: "#FCC624",
      },
      {
        key: "nginx",
        title: "Nginx",
        href: "https://nginx.org",
        icon: "/icons/nginx.svg",
        color: "#009639",
      },
      {
        key: "docker",
        title: "Docker",
        href: "https://www.docker.com",
        icon: "/icons/docker.svg",
        color: "#2496ED",
      },
      {
        key: "prometheus",
        title: "Prometheus",
        href: "https://prometheus.io",
        icon: "/icons/prometheus.svg",
        color: "#E6522C",
      },
      {
        key: "grafana",
        title: "Grafana",
        href: "https://grafana.com",
        icon: "/icons/grafana.svg",
        color: "#F46800",
      },
      {
        key: "posthog",
        title: "PostHog",
        href: "https://posthog.com",
        icon: "/icons/posthog.svg",
        color: "var(--primary)",
      },
      {
        key: "sentry",
        title: "Sentry",
        href: "https://sentry.io",
        icon: "/icons/sentry.svg",
        color: "var(--primary)",
      },
      {
        key: "opentelemetry",
        title: "OpenTelemetry",
        href: "https://opentelemetry.io",
        icon: "/icons/opentelemetry.svg",
        color: "var(--primary)",
      },
    ],
  },
  {
    category: "Workflow & AI",
    items: [
      {
        key: "git",
        title: "Git",
        href: "https://git-scm.com",
        icon: "/icons/git.svg",
        color: "#F03C2E",
      },
      {
        key: "github",
        title: "Github",
        href: "https://github.com",
        icon: "/icons/github.svg",
        color: "var(--primary)",
      },
      {
        key: "claude",
        title: "Claude",
        href: "https://claude.ai",
        icon: "/icons/claude.svg",
        color: "#D97757",
      },
      {
        key: "cursor",
        title: "Cursor",
        href: "https://cursor.com",
        icon: "/icons/cursor.svg",
        color: "var(--primary)",
      },
      {
        key: "postman",
        title: "Postman",
        href: "https://www.postman.com",
        icon: "/icons/postman.svg",
        color: "#FF6C37",
      },
    ],
  },
] satisfies StackGroup[];
