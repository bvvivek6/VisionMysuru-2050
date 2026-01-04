import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { Section } from "./Section.jsx";
import { TOPICS, TIMELINE } from "../../constants/topics.js";

const About = () => {
  return (
    <Section id="about" eyebrow="About" title="About Mysuru Vision 2050">
      <div className="flex flex-col gap-6 md:flex-row md:gap-12">
        <div className=" max-w-xl mx-auto py-3 md:py-6">
          <p className="md:text-md text-sm leading-relaxed text-[var(--muted)]">
            Mysuru Vision 2050 is not just an event; it is a city-wide movement.
            Bridging the gap between academic theory and civic reality, this
            initiative transforms students into “City Consultants”. Over a
            60-day rapid innovation cycle, participants will identify
            ground-level bottlenecks and propose scalable solutions.
          </p>

          <p className="mt-4 md:text-md text-sm leading-relaxed text-[var(--muted)]">
            The goal is to turn local observations into structured proposals
            that can be evaluated, refined, and compiled into a practical
            roadmap for the city — anchored in clear problem definition,
            evidence, feasibility, and measurable impact.
          </p>
          <div className="mt-6 px-5 py-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
              Our Motto
            </div>
            <div className="mt-2 text-lg font-semibold italic text-[var(--text)]">
              “Don't Just Live in Mysuru. Lead It.”
            </div>
          </div>

          <div className="mt-6">
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              <div className="border rounded-2xl border-[var(--border)] px-4 py-3">
                <div className="text-xs font-semibold text-[var(--muted)]">
                  01
                </div>
                <div className="mt-1 text-sm font-semibold text-[var(--text)]">
                  Observe
                </div>
                <div className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                  Spot a real, local civic bottleneck.
                </div>
              </div>
              <div className="border rounded-2xl border-[var(--border)] px-4 py-3">
                <div className="text-xs font-semibold text-[var(--muted)]">
                  02
                </div>
                <div className="mt-1 text-sm font-semibold text-[var(--text)]">
                  Diagnose
                </div>
                <div className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                  Back it with evidence and root-cause thinking.
                </div>
              </div>
              <div className="border rounded-2xl border-[var(--border)] px-4 py-3">
                <div className="text-xs font-semibold text-[var(--muted)]">
                  03
                </div>
                <div className="mt-1 text-sm font-semibold text-[var(--text)]">
                  Propose
                </div>
                <div className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                  Deliver a solution that can scale city-wide.
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[var(--button)] ring-1 ring-[var(--border)] hover:bg-[var(--primary-hover)]"
              >
                Submit your idea <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative h-full overflow-hidden md:h-[76vh] w-full">
          <img
            src="/about.jpg"
            alt="Mysuru city"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute left-0 top-0 h-full w-15 bg-gradient-to-r from-[var(--bg)] to-transparent" />
          <div className="absolute right-0 top-0 h-full w-15 bg-gradient-to-l from-[var(--bg)] to-transparent" />
          <div className="absolute top-0 h-15 w-full bg-gradient-to-b from-[var(--bg)] to-transparent" />
          <div className="absolute bottom-0  h-15 w-full bg-gradient-to-t from-[var(--bg)] to-transparent" />
        </div>
      </div>
    </Section>
  );
};

export default About;
