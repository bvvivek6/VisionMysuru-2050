import { Link } from "react-router-dom";
import { FiArrowRight, FiCompass, FiLayers } from "react-icons/fi";

const FooterSection = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-sm font-semibold text-[var(--text)]">
              Vision Mysuru 2050
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              District-level ideathon for students, startups, and NGOs.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--text)]">
              Quick links
            </div>
            <div className="mt-2 space-y-1 text-sm">
              {["#why", "#topics", "#timeline", "#objectives", "#faqs"].map(
                (href) => (
                  <a
                    key={href}
                    href={href}
                    className="block text-[var(--muted)] hover:text-[var(--accent)]"
                  >
                    {href.replace("#", "").toUpperCase()}
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--text)]">
              Participate
            </div>
            <div className="mt-2 space-y-1 text-sm">
              {["College Students", "Startups", "NGOs"].map((t) => (
                <div key={t} className="text-[var(--muted)]">
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--text)]">
              Submit
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Share your idea and get a chance to win prizes and explore funding
              support.
            </p>
            <div className="mt-3">
              <Link
                to="/submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--text)] ring-1 ring-[var(--border)] hover:bg-[var(--primary-hover)]"
              >
                Submit Idea <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-2)] sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Vision Mysuru 2050</div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <FiCompass /> Mysuru District
            </span>
            <span className="text-[var(--muted-2)]">•</span>
            <span className="inline-flex items-center gap-1">
              <FiLayers /> Ideathon
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
