import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS } from "@/src/data/site-nav";

export function SiteNav() {
  return (
    <header className="border-border bg-background sticky top-0 z-50 border-b">
      <nav className="border-border mx-auto flex w-full max-w-3xl items-center gap-2 border-x border-t px-4 py-4 sm:gap-4">
        <Link
          href="/"
          aria-label="Ahmed Raza — home"
          className="font-brand translate-y-[0.07em] text-[2.5rem] leading-[0.7]"
        >
          AR
        </Link>

        <div className="flex-1" />

        <ul className="flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted hover:text-primary font-display block px-1 py-1 text-sm transition-colors sm:px-2 sm:text-base"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="bg-border h-5 w-px shrink-0" aria-hidden />

        <ThemeToggle />
      </nav>
    </header>
  );
}
