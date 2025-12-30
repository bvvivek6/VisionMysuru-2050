import { FiChevronDown } from "react-icons/fi";
import { FAQS } from "../../constants/faqs";
import { Section } from "./Section.jsx";

const FaqsSection = () => {
  return (
    <Section id="faqs" eyebrow="FAQs" title="Frequently asked questions">
      <div className="grid gap-5 lg:grid-cols-2">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[var(--text)]">
                {f.q}
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--muted)] ring-1 ring-[var(--border)] group-open:bg-[var(--accent-soft)] group-open:text-[var(--accent)]">
                <FiChevronDown className="transition-transform group-open:rotate-180" />
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
};

export default FaqsSection;
