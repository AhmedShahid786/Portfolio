"use client";

import { useState } from "react";

import { MoonIcon } from "@/components/icons/moon-icon";
import { SunMediumIcon } from "@/components/icons/sun-medium-icon";
import { useClickSound } from "@/hooks/use-click-sound";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [click] = useClickSound();

  const switchTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    click();
    setTheme(next);

    const root = document.documentElement;
    root.classList.remove(theme);
    root.classList.add(next);
  };

  return (
    <button
      type="button"
      aria-label="Toggle mode"
      aria-pressed={theme === "light"}
      onClick={switchTheme}
      className="text-muted hover:text-primary relative flex cursor-pointer touch-manipulation items-center justify-center transition-colors"
    >
      <span className="pointer-fine:hidden absolute size-12" aria-hidden />

      {theme === "dark" ? (
        <MoonIcon aria-hidden />
      ) : (
        <SunMediumIcon aria-hidden />
      )}
    </button>
  );
}
