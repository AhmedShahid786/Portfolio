import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS } from "@/src/data/site-nav";

export function SiteNav() {
  return (
    <header className="border-border bg-background sticky top-0 z-50 border-b">
      <nav className="border-border mx-auto grid w-full max-w-3xl grid-cols-[auto_1fr_auto] items-center gap-2 border-x border-t px-4 py-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
        <ul className="flex min-w-0 items-center gap-1 sm:gap-2">
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

        <Link
          href="/"
          aria-label="Ahmed Raza — home"
          className="font-brand translate-y-[0.07em] justify-self-center text-[2.5rem] leading-[0.7]"
        >
          AR
        </Link>

        <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-4">
          <div className="bg-border h-5 w-px shrink-0" aria-hidden />

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
