import { useMemo, useState } from "react";

const inputBase =
  "mt-1 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400/70 outline-none ring-0 transition focus:border-cyan-300/40";

function Field({ label, required, hint, children }) {
  return (
    <label className="block">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-white">{label}</span>
        {required ? (
          <span className="text-xs font-semibold text-cyan-200/90">*</span>
        ) : null}
      </div>
      {hint ? (
        <div className="mt-1 text-xs text-slate-200/60">{hint}</div>
      ) : null}
      {children}
    </label>
  );
}

function SectionCard({ title, subtitle, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7">
      <div>
        <div className="text-lg font-semibold tracking-tight text-white">
          {title}
        </div>
        {subtitle ? (
          <div className="mt-1 text-sm text-slate-200/70">{subtitle}</div>
        ) : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function SubmitIdeasPage() {
  const [submitted, setSubmitted] = useState(false);

  const rules = useMemo(
    () => [
      "Be clear: define the problem, who it affects, and why it matters.",
      "Be feasible: explain how you would implement in Mysuru (partners, resources, timeline).",
      "Be measurable: state 2–3 impact metrics (time, cost, safety, emissions, access, satisfaction).",
      "Be original: credit sources and avoid copying existing submissions.",
      "Be respectful: no hateful, unsafe, or illegal content.",
      "One idea per submission. You can submit again for another idea.",
    ],
    []
  );

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="space-y-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs font-semibold tracking-wide text-slate-200/90">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          Submission Portal
        </div>
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Submit your idea for VisionMysuru-2050
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200/75 md:text-base">
          This form has dummy fields for now. Once you finalize the required
          fields and backend API, we can wire it up to store submissions.
        </p>

        {submitted ? (
          <div className="mt-6 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-4 text-sm text-cyan-100">
            Submission captured (demo). Replace this with real API integration
            when ready.
          </div>
        ) : null}
      </div>

      <SectionCard
        title="Rules & Regulations"
        subtitle="Please read before submitting"
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {rules.map((r) => (
            <li
              key={r}
              className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-violet-300/80" />
              <span className="text-sm leading-relaxed text-slate-200/75">
                {r}
              </span>
            </li>
          ))}
        </ul>
      </SectionCard>

      <form onSubmit={handleSubmit} className="space-y-6">
        <SectionCard
          title="College Students"
          subtitle="For school/college teams and individuals"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full Name" required>
              <input className={inputBase} placeholder="Your name" />
            </Field>
            <Field label="Email" required>
              <input className={inputBase} placeholder="name@example.com" />
            </Field>
            <Field label="College / Institution" required>
              <input className={inputBase} placeholder="Institution name" />
            </Field>
            <Field label="Team Size" hint="If solo, enter 1">
              <input className={inputBase} placeholder="1" />
            </Field>
            <div className="md:col-span-2">
              <Field label="Idea Title" required>
                <input
                  className={inputBase}
                  placeholder="A short, catchy title"
                />
              </Field>
            </div>
            <div className="md:col-span-2">
              <Field label="Problem Statement" required>
                <textarea
                  className={inputBase + " min-h-28"}
                  placeholder="What problem in Mysuru are you solving?"
                />
              </Field>
            </div>
            <div className="md:col-span-2">
              <Field label="Proposed Solution" required>
                <textarea
                  className={inputBase + " min-h-28"}
                  placeholder="Describe your approach (tech + non-tech)."
                />
              </Field>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Startups"
          subtitle="For early-stage to growth-stage ventures"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Founder / Point of Contact" required>
              <input className={inputBase} placeholder="Full name" />
            </Field>
            <Field label="Email" required>
              <input className={inputBase} placeholder="name@startup.com" />
            </Field>
            <Field label="Startup Name" required>
              <input className={inputBase} placeholder="Startup name" />
            </Field>
            <Field label="Website / LinkedIn" hint="Optional">
              <input className={inputBase} placeholder="https://..." />
            </Field>
            <div className="md:col-span-2">
              <Field label="Solution Summary" required>
                <textarea
                  className={inputBase + " min-h-28"}
                  placeholder="What are you building and how does it help Mysuru by 2050?"
                />
              </Field>
            </div>
            <div className="md:col-span-2">
              <Field
                label="Pilot Plan"
                hint="Partners, timeline, budget (dummy)"
                required
              >
                <textarea
                  className={inputBase + " min-h-28"}
                  placeholder="How would you pilot this in Mysuru?"
                />
              </Field>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="NGOs" subtitle="For non-profits and community orgs">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Coordinator / Point of Contact" required>
              <input className={inputBase} placeholder="Full name" />
            </Field>
            <Field label="Email" required>
              <input className={inputBase} placeholder="name@ngo.org" />
            </Field>
            <Field label="Organisation Name" required>
              <input className={inputBase} placeholder="NGO name" />
            </Field>
            <Field
              label="Focus Area"
              hint="E.g., education, health, disability, environment"
            >
              <input className={inputBase} placeholder="Your focus area" />
            </Field>
            <div className="md:col-span-2">
              <Field label="Community Problem" required>
                <textarea
                  className={inputBase + " min-h-28"}
                  placeholder="What problem are you seeing on the ground?"
                />
              </Field>
            </div>
            <div className="md:col-span-2">
              <Field label="Proposed Intervention" required>
                <textarea
                  className={inputBase + " min-h-28"}
                  placeholder="What intervention or program do you propose?"
                />
              </Field>
            </div>
          </div>
        </SectionCard>

        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-semibold text-white">
              Submit (Demo)
            </div>
            <div className="mt-1 text-sm text-slate-200/70">
              This does not send data anywhere yet.
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-100 ring-1 ring-cyan-300/30 transition hover:bg-cyan-400/20"
          >
            Submit Idea
          </button>
        </div>
      </form>
    </div>
  );
}
