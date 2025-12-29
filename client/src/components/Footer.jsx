import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold tracking-wide text-white">
              VisionMysuru-2050
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-300/80">
              A future-forward ideathon to co-create a smarter, greener, more
              inclusive Mysuru.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Explore</div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-slate-300/80 hover:text-white" to="/#why">
                Why VisionMysuru
              </Link>
              <Link className="text-slate-300/80 hover:text-white" to="/#about">
                About
              </Link>
              <Link
                className="text-slate-300/80 hover:text-white"
                to="/#timeline"
              >
                Timeline
              </Link>
              <Link className="text-slate-300/80 hover:text-white" to="/#faqs">
                FAQs
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Participate</div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-slate-300/80 hover:text-white" to="/submit">
                Submit an Idea
              </Link>
              <span className="text-slate-300/60">
                Email: hello@visionmysuru2050.example
              </span>
              <span className="text-slate-300/60">Location: Mysuru, KA</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-300/60 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} VisionMysuru-2050. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
