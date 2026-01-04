import { Section } from "./Section.jsx";

const CORE_OBJECTIVES = [
  {
    title: 'To Create a Neutral "Think-Tank"',
    desc: "Establish a credible, non-partisan platform where academia, industry, and government converge to deliberate on Mysuru’s long-term urban challenges without procedural or bureaucratic friction.",
    outcome:
      "Enables structured dialogue, cross-sector trust, and policy-ready insights grounded in research.",
  },
  {
    title: "To Bridge the Civic Data Gap",
    desc: "Mobilise student participation to capture granular, hyper-local civic data that traditional surveys, reports, and top-down studies often fail to surface.",
    outcome:
      "Creates a living data layer that reflects on-ground realities across neighbourhoods and communities.",
  },
  {
    title: "To Foster Safe and Responsible Innovation",
    desc: "Provide a controlled sandbox where bold ideas, emerging technologies, and unconventional approaches can be tested, refined, and stress-checked before real-world deployment.",
    outcome:
      "Reduces implementation risk while encouraging creativity and experimentation.",
  },
  {
    title: "To Institutionalise the Future",
    desc: "Translate collective insights, validated ideas, and evidence-backed proposals into a formal white paper recognised by institutional and civic leadership.",
    outcome:
      "Ensures continuity, accountability, and long-term impact beyond individual events or cohorts.",
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
            border border-[var(--border)]
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
