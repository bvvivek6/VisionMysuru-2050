import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { TIMELINE } from "../../constants/topics";
import { Section } from "./Section.jsx";

const useInView = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const TimelineItem = ({ step, index }) => {
  const [ref, visible] = useInView();
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex min-h-[140px]">
      <span
        className={`absolute top-1/2 -translate-y-1/2
          left-2.5 md:left-1/2 md:-translate-x-1/2
          h-4 w-4 rounded-full z-10 transition-all duration-500
          ${
            visible
              ? "bg-[var(--accent)] shadow-[0_0_0_8px_var(--accent-soft)] scale-110"
              : "bg-[var(--surface)] border border-[var(--border)]"
          }`}
      />

      <div className="flex w-full">
        <div
          className={`hidden md:flex w-1/2 ${
            isLeft ? "justify-end pr-14" : ""
          }`}
        >
          {isLeft && <Card step={step} visible={visible} align="right" />}
        </div>

        <div
          className={`hidden md:flex w-1/2 ${
            !isLeft ? "justify-start pl-14" : ""
          }`}
        >
          {!isLeft && <Card step={step} visible={visible} />}
        </div>

        <div className="md:hidden w-full pl-10">
          <Card step={step} visible={visible} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ step, visible, align }) => {
  return (
    <div
      className={`max-w-md w-full rounded-2xl border border-[var(--border)]
        bg-[var(--surface)]/45 backdrop-blur p-4
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${align === "right" ? "text-right" : "text-left"}
      `}
    >
      <span
        className="inline-block mb-2 rounded-full border border-[var(--border)]
        bg-[var(--surface-2)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
      >
        {step.date}
      </span>

      <h3 className="mt-2 text-lg font-semibold text-[var(--text)]">
        {step.title}
      </h3>

      <p className="mt-2 text-sm font-semibold text-[var(--muted)]">
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
      fullWidth
    >
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        <img
          src="/mysurutimeline.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0 bg-gradient-to-b
          from-[var(--bg)]
          via-[var(--bg)]/20
          to-[var(--bg)]"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div
            className="absolute top-0 h-full w-1
            left-10 md:left-1/2 md:-translate-x-1/2
            bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent"
          />

          <div className="space-y-8">
            {TIMELINE.map((step, index) => (
              <TimelineItem key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TimelineSection;
