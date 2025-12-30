import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export const TopNav = () => {
  const navItems = [
    { label: "Why", href: "#why" },
    { label: "Topics", href: "#topics" },
    { label: "Timeline", href: "#timeline" },
    { label: "Objectives", href: "#objectives" },
    { label: "FAQs", href: "#faqs" },
    { label: "Mysuru", href: "#mysuru" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="leading-tight">
            <div className="text-sm font-semibold text-[var(--text)]">
              Vision Mysuru 2050
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/submit"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--button)] ring-1 ring-[var(--border)] hover:bg-[var(--primary-hover)]"
          >
            Submit <FiArrowRight />
          </Link>
        </div>
      </div>
    </header>
  );
};
