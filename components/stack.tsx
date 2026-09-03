import { STACK } from "@/src/data/stack";

const ID = "stack";

function TechIcon({ src }: { src: string }) {
  return (
    <span
      aria-hidden
      className="text-muted block size-3.5 shrink-0 bg-current"
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

      <div className="relative [--badge-height:--spacing(6)] [--col-left-width:--spacing(48)]">
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px bg-[linear-gradient(to_bottom,var(--border)_4px,transparent_2px)] bg-size-[1px_6px] bg-repeat-y max-sm:hidden"
          aria-hidden
        />

        {STACK.map((group, index) => (
          <div
            key={group.category}
            className="border-border grid items-start gap-y-2 border-b py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
          >
            <div
              id={categoryId(group.category)}
              className="text-muted pl-4 text-sm/(--badge-height)"
            >
              <span
                className="text-muted/50 mr-1.5 font-mono select-none"
                aria-hidden
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>
              {group.category}
            </div>

            <ul
              aria-labelledby={categoryId(group.category)}
              className="flex flex-wrap gap-1.5 px-4"
            >
              {group.items.map((item) => (
                <li key={item.key} className="flex">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-surface/80 text-primary inset-ring-border hover:bg-surface flex h-(--badge-height) items-center justify-center gap-1.5 rounded-full px-2 font-mono text-xs transition-colors inset-ring-1"
                  >
                    <TechIcon src={item.icon} />
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
