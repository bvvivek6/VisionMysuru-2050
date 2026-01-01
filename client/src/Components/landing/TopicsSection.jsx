import { TOPICS } from "../../constants/topics";
import { Section } from "./Section.jsx";

const TopicsSection = () => {
  return (
    <Section
      id="topics"
      eyebrow="Focus areas"
      title="Thematic priorities for proposal submission"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((t, idx) => (
          <div
            key={t.title}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]"
          >
            {/* header */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                Area {String(idx + 1).padStart(2, "0")}
              </span>

              {/* subtle icon, not dominant */}
              <t.icon className="h-5 w-5 text-[var(--muted)] group-hover:text-[var(--accent)] transition" />
            </div>

            <h3 className="text-base font-semibold text-[var(--text)]">
              {t.title}
            </h3>

            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
              {t.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--border)]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TopicsSection;
