import { TOPICS } from "../../constants/topics";
import { Section } from "./Section.jsx";

const TopicsSection = () => {
  return (
    <Section
      id="topics"
      eyebrow="Tracks"
      title="Choose a topic and pitch your solution"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((t) => (
          <div
            key={t.title}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--primary)] text-[var(--text)] ring-1 ring-[var(--border)]">
                <t.icon />
              </span>
              <div className="text-base font-semibold text-[var(--text)]">
                {t.title}
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {t.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
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
