import { FiArrowUpRight } from "react-icons/fi";
import { Section } from "./Section.jsx";

const points = [
  {
    label: "Context-driven challenges",
    title: "Rooted in real district priorities",
    desc: "Problem statements are derived from Mysuru’s on-ground civic and social needs, ensuring relevance, feasibility, and measurable public impact.",
  },
  {
    label: "Guided refinement",
    title: "Expert mentorship & institutional visibility",
    desc: "Shortlisted ideas receive structured guidance from domain experts, with opportunities to present to decision-makers and partner organisations.",
  },
  {
    label: "Beyond the event",
    title: "Clear pathways for implementation",
    desc: "Promising ideas are supported beyond ideation through pilot opportunities, partnerships, and potential funding channels.",
  },
];

const WhySection = () => {
  return (
    <Section
      id="why"
      eyebrow="Why this ideathon"
      title="Designed for ideas that deserve to exist beyond slides"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {points.map((item, idx) => (
          <div
            key={item.title}
            className="group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]"
          >
            {/* subtle index */}
            <div className="mb-6 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
              {String(idx + 1).padStart(2, "0")} · {item.label}
            </div>

            <h3 className="text-lg font-semibold text-[var(--text)]">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {item.desc}
            </p>

            {/* quiet affordance */}
            <div className="pointer-events-none absolute bottom-6 right-6 opacity-0 transition group-hover:opacity-100">
              <FiArrowUpRight className="h-4 w-4 text-[var(--accent)]" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhySection;
