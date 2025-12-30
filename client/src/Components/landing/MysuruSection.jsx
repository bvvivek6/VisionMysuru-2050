import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCompass,
  FiFeather,
  FiGlobe,
  FiLayers,
  FiMapPin,
} from "react-icons/fi";
import { Section } from "./Section.jsx";

const MysuruSection = () => {
  return (
    <Section
      id="mysuru"
      eyebrow="About Mysuru"
      title="Heritage, culture, and a future-ready district"
    >
      <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] ring-1 ring-[var(--border)]">
                <FiMapPin />
              </span>
              <div className="text-base font-semibold text-[var(--text)]">
                Mysuru: heritage-first, innovation-forward
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Mysuru is celebrated for its living heritage—palaces, craft
              traditions, classical arts, and vibrant festivals—while also
              evolving as an education and technology hub. Vision Mysuru 2050
              invites ideas that protect what makes Mysuru unique and amplify
              quality of life through sustainable, inclusive growth.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { icon: FiFeather, label: "Culture" },
                { icon: FiCompass, label: "Tourism" },
                { icon: FiGlobe, label: "Sustainability" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-4"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                    <item.icon className="text-[var(--accent)]" />
                    {item.label}
                  </div>
                  <div className="mt-1 text-xs text-[var(--muted)]">
                    Preserve, enhance, and scale
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--primary)] text-[var(--text)] ring-1 ring-[var(--border)]">
                <FiLayers />
              </span>
              <div className="text-base font-semibold text-[var(--text)]">
                What to include in your pitch
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {[
                "The problem in Mysuru (who is affected?)",
                "Your solution and how it works",
                "Implementation partners and timeline",
                "Expected impact (numbers if possible)",
                "Budget / funding requirement (optional)",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="/submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[var(--text)] ring-1 ring-[var(--border)] hover:bg-[var(--primary-hover)]"
              >
                Submit now <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MysuruSection;
