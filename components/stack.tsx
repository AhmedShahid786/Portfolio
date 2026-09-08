import type { CSSProperties } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/base-tooltip";
import { STACK } from "@/src/data/stack";

const ID = "stack";

const GRID_RULES =
  "[&>li:nth-child(6n+1)]:border-l-0 [&>li:nth-child(6n+1):nth-last-child(-n+6)]:border-b-0 [&>li:nth-child(6n+1):nth-last-child(-n+6)~li]:border-b-0";

function TechIcon({ src }: { src: string }) {
  return (
    <span
      aria-hidden
      className="block size-4 shrink-0 bg-current sm:size-6 md:size-8"
      style={{
        maskImage: `url("${src}")`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}

function categoryId(category: string) {
  return `${ID}-${category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

export function Stack() {
  return (
    <section id={ID} className="screen-line-top screen-line-bottom">
      <h2 className="font-display border-border border-b px-4 py-3 text-3xl font-medium">
        Stack
      </h2>

      <TooltipProvider>
        <div className="diagonal-stripes">
          <div className="border-border bg-background divide-border mx-4 divide-y border-x">
            {STACK.map((group) => (
              <div key={group.category} className="divide-border divide-y">
                <h3
                  id={categoryId(group.category)}
                  className="font-display px-4 py-3 text-lg leading-tight font-medium"
                >
                  {group.category}
                </h3>

                <ul
                  aria-labelledby={categoryId(group.category)}
                  className={`grid grid-cols-6 ${GRID_RULES}`}
                >
                  {group.items.map((item) => (
                    <li
                      key={item.key}
                      className="border-border flex border-b border-l"
                    >
                      <Tooltip>
                        <TooltipTrigger
                          render={
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ "--tech": item.color } as CSSProperties}
                              className="text-muted hover:bg-surface hover:text-(--tech) focus-visible:bg-surface focus-visible:text-(--tech) focus-visible:inset-ring-muted/50 flex flex-1 items-center justify-center p-2 transition-colors outline-none focus-visible:inset-ring-3 sm:p-4 md:p-6"
                            >
                              <TechIcon src={item.icon} />
                              <span className="sr-only">{item.title}</span>
                            </a>
                          }
                        />
                        <TooltipContent>{item.title}</TooltipContent>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </TooltipProvider>
    </section>
  );
}
