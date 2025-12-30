import { FiAward, FiTarget, FiUsers } from "react-icons/fi";
import { Section } from "./Section.jsx";

const WhySection = () => {
  return (
    <Section
      id="why"
      eyebrow="Why this ideathon?"
      title="A platform to convert ideas into impact"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          {
            icon: FiTarget,
            title: "Real district priorities",
            desc: "Ideas grounded in Mysuru’s needs with measurable outcomes and feasibility.",
          },
          {
            icon: FiUsers,
            title: "Mentorship + visibility",
            desc: "Shortlisted teams get guidance to sharpen execution plans and pitches.",
          },
          {
            icon: FiAward,
            title: "Prizes + funding pathways",
            desc: "Win exciting prizes and explore support from officials and partners.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-10"
          >
            <div className="absolute -bottom-8 -right-5 inline-flex items-center justify-center overflow-hidden rounded-full bg-[var(--accent-soft)] p-4 opacity-80">
              <card.icon className="h-30 w-30 text-[var(--accent)] opacity-60" />
            </div>
            <div className="flex items-center gap-3">
              <div className="text-base font-semibold uppercase text-[var(--text)]">
                {card.title}
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhySection;
