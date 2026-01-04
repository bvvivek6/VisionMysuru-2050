import { FiAlertCircle, FiUsers, FiMapPin, FiCheck } from "react-icons/fi";

const TEAM_COMPOSITION = [
  "2 to 3 members per team",
  "Students or recognised entities based in Mysuru",
  "Inter-college / institution teams permitted",
];

const CHALLENGE_FORMAT = [
  {
    title: "The Photo",
    desc: "Geotagged photo of a real civic issue.",
  },
  {
    title: "The Solution",
    desc: "Concise abstract (max 100 words).",
  },
  {
    title: "The Pitch",
    desc: "3-minute roadmap for shortlisted teams.",
  },
];

const DISQUALIFICATION = [
  "Plagiarised ideas",
  "Stock or AI-generated images",
  "Late submissions",
];

const RulesAndRegulations = () => {
  return (
    <section className="m-1 md:m-4 dm-sans">
      <main className="mx-auto max-w-6xl">
        <header className="mb-4">
          <span
            className="inline-flex items-center rounded-full
            bg-[var(--accent-soft)] px-4 py-1.5
            text-xs font-semibold uppercase tracking-wider
            text-[var(--accent)]"
          >
            Guidelines
          </span>
        </header>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div className=" border rounded-2xl overflow-hidden border-[var(--accent-soft)] ">
            <div className="mb-3 bg-[var(--accent-soft)]  flex p-4 items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center ">
                <FiUsers size={18} />
              </div>
              <h2 className="font-semibold text-[var(--text)]">
                Team Composition
              </h2>
            </div>

            <ul className="space-y-2 text-sm px-4 text-[var(--muted)]">
              {TEAM_COMPOSITION.map((item) => (
                <li key={item} className="flex gap-2">
                  <FiCheck className="mt-0.5 text-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--accent-soft)] overflow-hidden ">
            <div className="mb-3 bg-[var(--accent-soft)] flex p-4 items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center ">
                <FiMapPin size={18} />
              </div>
              <h2 className="font-semibold text-[var(--text)]">
                Challenge Format
              </h2>
            </div>

            <div className="space-y-2 text-sm pb-2  px-4  text-[var(--muted)]">
              {CHALLENGE_FORMAT.map(({ title, desc }) => (
                <div key={title}>
                  <div className="">
                    - {title} : {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-red-100 max-w-md">
            <div className="flex items-center gap-2 bg-[#F15950] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/80 text-white">
                <FiAlertCircle size={22} />
              </div>
              <h2 className="text-md font-bold tracking-tight text-white">
                Strictly Prohibited
              </h2>
            </div>

            <div className="p-4">
              <ul className="space-y-4">
                {DISQUALIFICATION.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[#F15950]" />

                    <span className="text-sm  leading-tight text-[#5D2320]/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-2 overflow-hidden gap-6
          rounded-2xl border border-[var(--border)]
          "
        >
          <div className="text-sm w-full p-6 font-semibold bg-[var(--accent-soft)] text-[var(--text)]">
            Submission File
          </div>
          <div className="p-4 text-sm text-[var(--muted)]">
            <p className="mt-1 text-sm text-[var(--muted)]">
              PDF • Max 2MB • Official Portal Only
            </p>

            <p className="mt-3 text-xs">
              Questions?{" "}
              <a
                href="mailto:vision2050@sdmimd.ac.in"
                className="font-semibold text-[var(--accent)]
                underline underline-offset-4"
              >
                Email Support
              </a>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default RulesAndRegulations;
