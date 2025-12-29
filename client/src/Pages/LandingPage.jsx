import { Link } from "react-router-dom";

const timelineItems = [
  {
    phase: "Phase 1",
    title: "Registrations Open",
    date: "Jan 10, 2026",
    detail:
      "Create your team or apply solo. Choose your track and start shaping your idea.",
  },
  {
    phase: "Phase 2",
    title: "Mentor Office Hours",
    date: "Jan 20–Feb 05, 2026",
    detail: "Get quick feedback on feasibility, impact, and storytelling.",
  },
  {
    phase: "Phase 3",
    title: "Submissions Close",
    date: "Feb 10, 2026",
    detail: "Finalise your draft and submit before the deadline.",
  },
  {
    phase: "Phase 4",
    title: "Final Pitch Day",
    date: "Feb 16, 2026",
    detail:
      "Top ideas present live to a jury of civic, industry, and academic leaders.",
  },
];

const faqs = [
  {
    q: "Who can participate?",
    a: "College students (15+), startups, and NGOs. Teams or individuals are welcome.",
  },
  {
    q: "What kinds of ideas are expected?",
    a: "Ideas that improve Mysuru by 2050: mobility, water, waste, energy, tourism, safety, education, health, accessibility, and more.",
  },
  {
    q: "Do I need a prototype?",
    a: "Not required for now. A clear problem statement, approach, and impact plan is enough.",
  },
  {
    q: "Can I submit multiple ideas?",
    a: "Yes. Submit one idea per form submission (you can submit again for another idea).",
  },
  {
    q: "Will there be mentorship?",
    a: "Yes, short mentor office hours are planned during the submission window.",
  },
  {
    q: "What happens after selection?",
    a: "Shortlisted teams will be invited to pitch. Winning ideas may be supported to pilot with partners.",
  },
];

export default function LandingPage() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden  px-4 py-12 md:px-10">
        <div className="absolute inset-0 " />
        <div className="relative md:items-center">
          <div>
            <h1 className="mt-5 text-balance text-5xl md:text-6xl font-semibold tracking-tight text-white ">
              Build ideas for a Mysuru that thrives in 2050.
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-200/80 md:text-lg">
              A futuristic ideathon for students, startups, and NGOs to design
              solutions that are bold, practical, and city-ready.
            </p>

            <div className="mt-7 flex  gap-2">
              <Link
                to="/submit"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-100 ring-1 ring-cyan-300/30 transition hover:bg-cyan-400/20"
              >
                Submit an Idea
              </Link>
              <a
                href="#timeline"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                View Timeline
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-xs text-slate-300/70">Tracks</div>
                <div className="mt-1 text-sm font-semibold text-white">
                  Civic • Tech • Social
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-xs text-slate-300/70">Audience</div>
                <div className="mt-1 text-sm font-semibold text-white">
                  Age 15–35
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-xs text-slate-300/70">Mode</div>
                <div className="mt-1 text-sm font-semibold text-white">
                  Online + Pitch
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="space-y-8 scroll-mt-28">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Why VisionMysuru?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200/75 md:text-base">
            Mysuru is growing fast. By 2050, the city needs solutions that are
            climate-smart, people-first, and future-proof.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "City-ready innovation",
              body: "Design ideas that can be piloted with partners and scaled across neighborhoods.",
            },
            {
              title: "Human + tech",
              body: "Blend technology with community needs—accessibility, equity, and trust matter.",
            },
            {
              title: "Measurable impact",
              body: "Think in outcomes: cost, time, emissions, safety, and experience—show the delta.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm font-semibold text-white">
                {card.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/75">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="grid gap-8 scroll-mt-28 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            About the Ideathon
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200/75 md:text-base">
            VisionMysuru-2050 is a high-energy competition to collect bold ideas
            from young builders, founders, and changemakers.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-200/75">
            <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
              <div className="font-semibold text-white">What you submit</div>
              <div className="mt-1">
                A clear problem, your solution approach, and expected impact.
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
              <div className="font-semibold text-white">How you win</div>
              <div className="mt-1">
                Strong story + feasibility + innovation + measurable impact.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <div className="text-xs font-semibold tracking-wide text-slate-200/80">
            Suggested Tracks
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              "Mobility & Safety",
              "Water & Resilience",
              "Waste & Circularity",
              "Energy & Climate",
              "Tourism & Culture",
              "Health & Education",
            ].map((track) => (
              <div
                key={track}
                className="rounded-2xl border border-white/10 bg-slate-950/30 p-4"
              >
                <div className="text-sm font-semibold text-white">{track}</div>
                <div className="mt-1 text-xs text-slate-200/70">
                  Prototype optional • Focus on outcomes
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-linear-to-r from-cyan-400/10 to-violet-400/10 p-4">
            <div className="text-sm font-semibold text-white">
              Ready to submit?
            </div>
            <p className="mt-1 text-sm text-slate-200/75">
              Use the submission page to pick your category and share your idea.
            </p>
            <div className="mt-4">
              <Link
                to="/submit"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Go to Submit Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="space-y-8 scroll-mt-28">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Timeline
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200/75 md:text-base">
            Dates below are placeholders—swap them with the official schedule
            anytime.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {timelineItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold tracking-wide text-cyan-200/90">
                    {item.phase}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    {item.title}
                  </div>
                </div>
                <div className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200/70">
                  {item.date}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/75">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="faqs" className="space-y-8 scroll-mt-28">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            FAQs
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200/75 md:text-base">
            Quick answers. If you need more details, share your preferred rules
            and we’ll plug them in.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm font-semibold text-white">{item.q}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/75">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-linear-to-r from-cyan-400/10 to-violet-400/10 p-6">
          <div className="text-sm font-semibold text-white">
            Bring your best future.
          </div>
          <p className="mt-2 text-sm text-slate-200/75">
            Every great city is built twice: first as an idea, then as reality.
          </p>
        </div>
      </section>
    </div>
  );
}
