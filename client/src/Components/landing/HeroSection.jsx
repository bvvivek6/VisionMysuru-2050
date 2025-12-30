import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-start md:text-center">
          <h1 className="text-4xl font-bold oswald uppercase tracking-tight text-[var(--text)] sm:text-5xl">
            Build the future of Mysuru.
            <span className="mt-2 block text-[var(--accent)]">
              Vision Mysuru 2050
            </span>
          </h1>

          <p className="mt-5 text-base text-[var(--muted)] sm:text-lg">
            A competition for college students, startups, and NGOs to pitch
            high-impact ideas. Get mentorship, recognition, and pathways to
            real-world implementation.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-3">
            <Link
              to="/submit"
              className="flex items-center w-full gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--text)] ring-1 ring-[var(--border)] hover:bg-[var(--primary-hover)]"
            >
              Submit your idea <FiArrowRight />
            </Link>

            <a
              href="#timeline"
              className="inline-flex items-center w-full gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface-2)]"
            >
              View timeline <FiCalendar />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
          <img
            src="/mysuru2.jpeg"
            alt="Future vision of Mysuru city"
            className="h-80 w-full object-cover sm:h-105"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
