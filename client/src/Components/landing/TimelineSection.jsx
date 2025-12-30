import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import { TIMELINE } from "../../constants/topics";
import { Section } from "./Section.jsx";

const TimelineSection = () => {
  return (
    <Section id="timeline" eyebrow="Schedule" title="Timeline">
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="grid gap-0 divide-y divide-[var(--border)] md:grid-cols-5 md:divide-x md:divide-y-0">
          {TIMELINE.map((step) => (
            <div key={step.title} className="p-6">
              <div className="text-xs font-semibold text-[var(--muted-2)]">
                {step.date}
              </div>
              <div className="mt-2 text-sm font-semibold text-[var(--text)]">
                {step.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--accent)] ring-1 ring-[var(--border)]">
            <FiCalendar />
          </span>
          <div>
            <div className="text-sm font-semibold text-[var(--text)]">
              Ready to pitch?
            </div>
            <div className="text-sm text-[var(--muted)]">
              Submit now and refine during mentorship.
            </div>
          </div>
        </div>
        <Link
          to="/submit"
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--text)] ring-1 ring-[var(--border)] hover:bg-[var(--primary-hover)]"
        >
          Go to submission <FiArrowRight />
        </Link>
      </div>
    </Section>
  );
};

export default TimelineSection;
