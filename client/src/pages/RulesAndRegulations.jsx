import { TopNav } from "../Components/TopNav.jsx";
import FooterSection from "../Components/landing/FooterSection.jsx";
import { Link } from "react-router-dom";

const RulesAndRegulations = () => {
  const teamComposition = [
    "Teams must consist of 2 to 3 members",
    "Participants must be registered students or recognised entities based in Mysuru",
    "Inter-college and cross-institution teams are permitted",
  ];

  const challengeFormat = [
    {
      title: "The Photo",
      desc: "Capture a clear, geotagged photograph of a real civic issue in Mysuru (e.g., traffic congestion, waste accumulation, public safety gaps).",
    },
    {
      title: "The Solution",
      desc: "Submit a concise abstract (maximum 100 words) outlining a practical and implementable solution.",
    },
    {
      title: "The Pitch",
      desc: "Shortlisted teams will present a 3-minute roadmap to a review panel.",
    },
  ];

  const disqualification = [
    "Plagiarised or copied ideas",
    "Use of stock or AI-generated images instead of on-site photographs",
    "Submissions made after the stated deadline",
  ];

  const deadlines = [
    { label: "Registration opens", date: "Feb 01, 2026" },
    { label: "Submission deadline", date: "Feb 20, 2026" },
    { label: "Elimination round", date: "Feb 21, 2026" },
    { label: "Corporate summit", date: "Feb 22, 2026" },
    { label: "Grand conclave & handover", date: "Feb 23, 2026" },
  ];

  return (
    <div className="m-1 md:m-2 rounded-2xl overflow-hidden montserrat tracking-tighter flex flex-col bg-[var(--bg)] text-[var(--text)]">
      <TopNav />

      <main className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-[var(--accent)]">
            Rules & Regulations
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Participation guidelines for Mysuru Vision 2050
          </h1>
          <p className="mt-4 text-base text-[var(--muted)]">
            These guidelines ensure fairness, originality, and evidence-based
            participation across all submissions.
          </p>
        </header>

        <div className="mt-14 space-y-14">
          <section>
            <h2 className="text-xl font-semibold">Team composition</h2>
            <ul className="mt-4 space-y-2 text-[var(--muted)]">
              {teamComposition.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Challenge format (evidence-based)
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              Submissions must demonstrate a real-world problem supported by
              on-site evidence.
            </p>

            <div className="mt-6 space-y-5">
              {challengeFormat.map((s) => (
                <div key={s.title}>
                  <div className="font-medium">{s.title}</div>
                  <p className="mt-1 text-[var(--muted)]">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Disqualification criteria</h2>
            <ul className="mt-4 space-y-2 text-[var(--muted)]">
              {disqualification.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Important dates</h2>
            <div className="mt-4 divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
              {deadlines.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-[var(--muted)]">{d.label}</span>
                  <span className="font-medium">{d.date}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Submissions & contact</h2>

            <div className="mt-5 space-y-4">
              <div>
                <div className="font-medium">Submission portal</div>
                <p className="mt-1 text-[var(--muted)]">
                  Upload your abstract or proposal through the official portal.
                </p>

                <Link
                  to="/submit"
                  className="mt-4 inline-flex items-center rounded-lg border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition hover:border-[var(--accent)]"
                >
                  Go to submission portal
                </Link>
              </div>

              <div>
                <div className="font-medium">File requirements</div>
                <p className="mt-1 text-[var(--muted)]">
                  Accepted formats: PDF or PPT only.
                </p>

                <p className="mt-3 text-sm text-[var(--muted)]">
                  For queries, email{" "}
                  <a
                    href="mailto:vision2050@sdmimd.ac.in"
                    className="font-medium hover:text-[var(--accent)]"
                  >
                    vision2050@sdmimd.ac.in
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default RulesAndRegulations;
