import { Link, NavLink } from "react-router-dom";

const navLinkBase =
  "text-sm font-medium tracking-wide text-slate-200/90 hover:text-white transition";

const navLinkActive = "text-white";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <NavLink
          to="/"
          className="group inline-flex items-center gap-2"
          aria-label="VisionMysuru-2050 Home"
        >
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-white">
              VisionMysuru-2050
            </div>
            <div className="text-xs text-slate-300/80">
              Ideathon Competition
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <Link className={navLinkBase} to="/#why">
            Why
          </Link>
          <Link className={navLinkBase} to="/#about">
            About
          </Link>
          <Link className={navLinkBase} to="/#timeline">
            Timeline
          </Link>
          <Link className={navLinkBase} to="/#faqs">
            FAQs
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/submit"
            className={({ isActive }) =>
              [
                "inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition",
                "border-cyan-400/30 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/15",
                isActive ? "ring-1 ring-cyan-300/40" : "",
              ].join(" ")
            }
          >
            Submit Ideas
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                navLinkBase,
                "hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 md:inline-flex",
                isActive ? navLinkActive : "",
              ].join(" ")
            }
          >
            Landing
          </NavLink>
        </div>
      </div>
    </header>
  );
}
