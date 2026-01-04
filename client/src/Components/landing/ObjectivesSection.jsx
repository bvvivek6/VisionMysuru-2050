import { Section } from "./Section.jsx";

const CORE_OBJECTIVES = [
  {
    title: 'To Create a Neutral "Think-Tank"',
    desc: "Create a non-partisan platform where academia, industry, and government collaborate on Mysuru’s long-term urban challenges.",
    outcome:
      "Enables informed dialogue, shared understanding, and research-backed policy inputs.",
  },
  {
    title: "To Bridge the Civic Data Gap",
    desc: "Engage students to capture granular, hyper-local civic data often missed by conventional surveys.",
    outcome:
      "Builds a living data layer reflecting real conditions across neighbourhoods.",
  },
  {
    title: "To Foster Safe and Responsible Innovation",
    desc: "Provide a controlled environment to test bold ideas, technologies, and new approaches before deployment.",
    outcome:
      "Encourages experimentation while reducing real-world implementation risk.",
  },
  {
    title: "To Institutionalise the Future",
    desc: "Convert validated insights and proposals into a formal, institutionally recognised white paper.",
    outcome: "Ensures continuity, accountability, and long-term civic impact.",
  },
];

const ObjectivesSection = () => {
  return (
    <Section
      id="objectives"
      eyebrow="Core Objectives"
      title="What Mysuru Vision 2050 is designed to achieve_"
    >
      <div className="grid gap-2 md:grid-cols-2">
        {CORE_OBJECTIVES.map((item, idx) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-xl 
              bg-[var(--surface)]
            px-6 py-8 transition hover:border-[var(--accent)]"
          >
            <h3 className="relative z-10 max-w-md text-2xl font-semibold tracking-tight text-[var(--text)]">
              {item.title}
            </h3>
            <p className="relative z-10 mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              {item.desc}
            </p>
            <div className="relative z-10 mt-6 max-w-md border-l-2 border-[var(--accent-soft)] pl-4">
              <p className="text-sm font-medium text-[var(--text)]">
                What this enables
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                {item.outcome}
              </p>
            </div>
            <div className="pointer-events-none absolute -bottom-2 -right-1 select-none">
              <span
                className="text-[11rem] font-semibold leading-none tracking-tighter
                text-[var(--text)] opacity-[0.05]
                transition group-hover:opacity-[0.08]"
              >
                {idx + 1}
              </span>
            </div>
            <div
              className="pointer-events-none absolute inset-0
              bg-[radial-gradient(circle_at_top_right,var(--accent-soft),transparent_60%)]
              opacity-60 transition group-hover:opacity-100"
            />
          </article>
        ))}
      </div>
    </Section>
  );
};

export default ObjectivesSection;
