import { EXPERIENCE, type Entry } from "@/src/data/experience";

function ExperienceEntry({ entry }: { entry: Entry }) {
  const company = entry.companyUrl ? (
    <a
      href={entry.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="link-underline hover:text-primary"
    >
      {entry.company}
    </a>
  ) : (
    entry.company
  );

  return (
    <div className="flex flex-col gap-1 p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-display text-lg leading-tight font-medium">
          {company}
        </h3>
        {entry.mode && <span className="text-muted text-sm">{entry.mode}</span>}
      </div>

      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <p className="text-secondary text-sm">{entry.role}</p>
        {entry.period && (
          <span className="text-muted text-sm">{entry.period}</span>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="screen-line-top screen-line-bottom">
      <h2 className="font-display border-border border-b px-4 py-3 text-3xl font-medium">
        Experience
      </h2>

      <ul className="divide-border divide-y">
        {EXPERIENCE.map((entry) => (
          <li key={entry.company}>
            <ExperienceEntry entry={entry} />
          </li>
        ))}
      </ul>
    </section>
  );
}
