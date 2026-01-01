import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { TIMELINE } from "../../constants/topics";
import { Section } from "./Section.jsx";

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, ...options }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const TimelineItem = ({ step }) => {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`relative pl-10 transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* dot */}
      <span
        className={`absolute left-[-3px] top-2 h-3.5 w-3.5 rounded-full border-2 transition-colors
          ${
            visible
              ? "bg-[var(--accent)] border-[var(--accent)]"
              : "bg-[var(--surface)] border-[var(--border)]"
          }
        `}
      />

      <div className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
        {step.date}
      </div>

      <h3 className="mt-1 text-sm font-semibold text-[var(--text)]">
        {step.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
        {step.detail}
      </p>
    </div>
  );
};

const TimelineSection = () => {
  return (
    <Section
      id="timeline"
      eyebrow="Process"
      title="Program timeline and milestones"
    >
      {/* timeline */}
      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <div className="absolute left-1 top-0 h-full w-px bg-[var(--border)]" />

        <div className="space-y-12">
          {TIMELINE.map((step) => (
            <TimelineItem key={step.title} step={step} />
          ))}
        </div>
      </div>

      {/* CTA – calm & institutional */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5">
        <div>
          <div className="text-sm font-semibold text-[var(--text)]">
            Submissions are open
          </div>
          <div className="text-sm text-[var(--muted)]">
            Early submissions can be refined during the review phase.
          </div>
        </div>

        <Link
          to="/submit"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]"
        >
          Submit proposal <FiArrowRight />
        </Link>
      </div>
    </Section>
  );
};

export default TimelineSection;
