import { FiAward, FiTarget } from "react-icons/fi";
import { Section } from "./Section.jsx";

const ObjectivesSection = () => {
  return (
    <Section
      id="objectives"
      eyebrow="Objectives"
      title="What we want to achieve"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] ring-1 ring-[var(--border)]">
              <FiTarget />
            </span>
            <div className="text-base font-semibold text-[var(--text)]">
              From ideas to action
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            {[
              "Collect visionary solutions for Mysuru 2050",
              "Encourage collaboration between students, startups, and NGOs",
              "Shortlist ideas with clear feasibility and measurable impact",
              "Enable pilots via mentorship and institutional support",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center ">
              <FiAward />
            </span>
            <div className="text-base font-semibold text-[var(--text)]">
              Evaluation focus
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {["Impact", "Feasibility", "Innovation", "Scalability"].map((k) => (
              <div
                key={k}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3"
              >
                <div className="text-sm font-semibold text-[var(--text)]">
                  {k}
                </div>
                <div className="mt-1 text-xs text-[var(--muted)]">
                  Clear outcomes and execution plan
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ObjectivesSection;
