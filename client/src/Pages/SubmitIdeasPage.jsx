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
  const [formType, setFormType] = useState("students");

  const [studentForm, setStudentForm] = useState({
    member1Name: "",
    member1Email: "",
    institution: "",
    isTeam: false,
    member2Name: "",
    member2Email: "",
    ideaTitle: "",
    problemStatement: "",
    proposedSolution: "",
  });

  const [startupForm, setStartupForm] = useState({
    contactName: "",
    email: "",
    startupName: "",
    website: "",
    solutionSummary: "",
    pilotPlan: "",
  });

  const [ngoForm, setNgoForm] = useState({
    contactName: "",
    email: "",
    organisationName: "",
    focusArea: "",
    communityProblem: "",
    proposedIntervention: "",
  });

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

  function handleFormTypeChange(nextType) {
    setFormType(nextType);
    setSubmitted(false);
  }

  const toggleBase =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ring-1";
  const toggleInactive =
    "bg-slate-950/20 text-slate-200/80 ring-white/10 hover:bg-slate-950/30";
  const toggleActive = "bg-cyan-400/15 text-cyan-100 ring-cyan-300/30";

  return (
    <div className="space-y-10">
      <div className=" p-7 md:p-10">
        <div className="inline-flex items-center gap-2  px-3 py-1 text-xs font-semibold tracking-wide text-slate-200/90">
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
        <div className=" p-5 md:p-6">
          <div className="text-sm font-semibold text-white">Choose a form</div>
          <div className="mt-3 inline-flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleFormTypeChange("students")}
              className={`${toggleBase} ${
                formType === "students" ? toggleActive : toggleInactive
              }`}
            >
              College Students
            </button>
            <button
              type="button"
              onClick={() => handleFormTypeChange("startups")}
              className={`${toggleBase} ${
                formType === "startups" ? toggleActive : toggleInactive
              }`}
            >
              Startups
            </button>
            <button
              type="button"
              onClick={() => handleFormTypeChange("ngos")}
              className={`${toggleBase} ${
                formType === "ngos" ? toggleActive : toggleInactive
              }`}
            >
              NGOs
            </button>
          </div>
        </div>

        {formType === "students" ? (
          <SectionCard
            title="College Students"
            subtitle="For school/college individuals or 2-member teams"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <div className="text-sm font-semibold text-white">
                  Team members
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <label className="inline-flex items-center gap-2 text-sm text-slate-200/80">
                    <input
                      type="checkbox"
                      checked={studentForm.isTeam}
                      onChange={(e) =>
                        setStudentForm((prev) => ({
                          ...prev,
                          isTeam: e.target.checked,
                          ...(e.target.checked
                            ? {}
                            : { member2Name: "", member2Email: "" }),
                        }))
                      }
                      className="h-4 w-4 rounded border-white/10 bg-slate-950/40"
                    />
                    Submitting as a 2-member team
                  </label>
                  <span className="text-xs font-semibold text-slate-200/60">
                    (max 2 members)
                  </span>
                </div>
              </div>

              <Field label="Member 1 Full Name" required>
                <input
                  className={inputBase}
                  placeholder="Your name"
                  value={studentForm.member1Name}
                  onChange={(e) =>
                    setStudentForm((prev) => ({
                      ...prev,
                      member1Name: e.target.value,
                    }))
                  }
                  required
                />
              </Field>
              <Field label="Member 1 Email" required>
                <input
                  className={inputBase}
                  placeholder="name@example.com"
                  value={studentForm.member1Email}
                  onChange={(e) =>
                    setStudentForm((prev) => ({
                      ...prev,
                      member1Email: e.target.value,
                    }))
                  }
                  required
                />
              </Field>

              {studentForm.isTeam ? (
                <>
                  <Field label="Member 2 Full Name" hint="Optional">
                    <input
                      className={inputBase}
                      placeholder="Teammate name"
                      value={studentForm.member2Name}
                      onChange={(e) =>
                        setStudentForm((prev) => ({
                          ...prev,
                          member2Name: e.target.value,
                        }))
                      }
                    />
                  </Field>
                  <Field label="Member 2 Email" hint="Optional">
                    <input
                      className={inputBase}
                      placeholder="teammate@example.com"
                      value={studentForm.member2Email}
                      onChange={(e) =>
                        setStudentForm((prev) => ({
                          ...prev,
                          member2Email: e.target.value,
                        }))
                      }
                    />
                  </Field>
                </>
              ) : null}

              <Field label="College / Institution" required>
                <input
                  className={inputBase}
                  placeholder="Institution name"
                  value={studentForm.institution}
                  onChange={(e) =>
                    setStudentForm((prev) => ({
                      ...prev,
                      institution: e.target.value,
                    }))
                  }
                  required
                />
              </Field>

              <Field
                label="Team Size"
                hint={studentForm.isTeam ? "2 members" : "1 member"}
              >
                <input
                  className={inputBase}
                  value={studentForm.isTeam ? "2" : "1"}
                  readOnly
                />
              </Field>

              <div className="md:col-span-2">
                <Field label="Idea Title" required>
                  <input
                    className={inputBase}
                    placeholder="A short, catchy title"
                    value={studentForm.ideaTitle}
                    onChange={(e) =>
                      setStudentForm((prev) => ({
                        ...prev,
                        ideaTitle: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Problem Statement" required>
                  <textarea
                    className={inputBase + " min-h-28"}
                    placeholder="What problem in Mysuru are you solving?"
                    value={studentForm.problemStatement}
                    onChange={(e) =>
                      setStudentForm((prev) => ({
                        ...prev,
                        problemStatement: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Proposed Solution" required>
                  <textarea
                    className={inputBase + " min-h-28"}
                    placeholder="Describe your approach (tech + non-tech)."
                    value={studentForm.proposedSolution}
                    onChange={(e) =>
                      setStudentForm((prev) => ({
                        ...prev,
                        proposedSolution: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
              </div>
            </div>
          </SectionCard>
        ) : null}

        {formType === "startups" ? (
          <SectionCard
            title="Startups"
            subtitle="For early-stage to growth-stage ventures"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Founder / Point of Contact" required>
                <input
                  className={inputBase}
                  placeholder="Full name"
                  value={startupForm.contactName}
                  onChange={(e) =>
                    setStartupForm((prev) => ({
                      ...prev,
                      contactName: e.target.value,
                    }))
                  }
                  required
                />
              </Field>
              <Field label="Email" required>
                <input
                  className={inputBase}
                  placeholder="name@startup.com"
                  value={startupForm.email}
                  onChange={(e) =>
                    setStartupForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                />
              </Field>
              <Field label="Startup Name" required>
                <input
                  className={inputBase}
                  placeholder="Startup name"
                  value={startupForm.startupName}
                  onChange={(e) =>
                    setStartupForm((prev) => ({
                      ...prev,
                      startupName: e.target.value,
                    }))
                  }
                  required
                />
              </Field>
              <Field label="Website / LinkedIn" hint="Optional">
                <input
                  className={inputBase}
                  placeholder="https://..."
                  value={startupForm.website}
                  onChange={(e) =>
                    setStartupForm((prev) => ({
                      ...prev,
                      website: e.target.value,
                    }))
                  }
                />
              </Field>
              <div className="md:col-span-2">
                <Field label="Solution Summary" required>
                  <textarea
                    className={inputBase + " min-h-28"}
                    placeholder="What are you building and how does it help Mysuru by 2050?"
                    value={startupForm.solutionSummary}
                    onChange={(e) =>
                      setStartupForm((prev) => ({
                        ...prev,
                        solutionSummary: e.target.value,
                      }))
                    }
                    required
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
                    value={startupForm.pilotPlan}
                    onChange={(e) =>
                      setStartupForm((prev) => ({
                        ...prev,
                        pilotPlan: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
              </div>
            </div>
          </SectionCard>
        ) : null}

        {formType === "ngos" ? (
          <SectionCard
            title="NGOs"
            subtitle="For non-profits and community orgs"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Coordinator / Point of Contact" required>
                <input
                  className={inputBase}
                  placeholder="Full name"
                  value={ngoForm.contactName}
                  onChange={(e) =>
                    setNgoForm((prev) => ({
                      ...prev,
                      contactName: e.target.value,
                    }))
                  }
                  required
                />
              </Field>
              <Field label="Email" required>
                <input
                  className={inputBase}
                  placeholder="name@ngo.org"
                  value={ngoForm.email}
                  onChange={(e) =>
                    setNgoForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                />
              </Field>
              <Field label="Organisation Name" required>
                <input
                  className={inputBase}
                  placeholder="NGO name"
                  value={ngoForm.organisationName}
                  onChange={(e) =>
                    setNgoForm((prev) => ({
                      ...prev,
                      organisationName: e.target.value,
                    }))
                  }
                  required
                />
              </Field>
              <Field
                label="Focus Area"
                hint="E.g., education, health, disability, environment"
              >
                <input
                  className={inputBase}
                  placeholder="Your focus area"
                  value={ngoForm.focusArea}
                  onChange={(e) =>
                    setNgoForm((prev) => ({
                      ...prev,
                      focusArea: e.target.value,
                    }))
                  }
                />
              </Field>
              <div className="md:col-span-2">
                <Field label="Community Problem" required>
                  <textarea
                    className={inputBase + " min-h-28"}
                    placeholder="What problem are you seeing on the ground?"
                    value={ngoForm.communityProblem}
                    onChange={(e) =>
                      setNgoForm((prev) => ({
                        ...prev,
                        communityProblem: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Proposed Intervention" required>
                  <textarea
                    className={inputBase + " min-h-28"}
                    placeholder="What intervention or program do you propose?"
                    value={ngoForm.proposedIntervention}
                    onChange={(e) =>
                      setNgoForm((prev) => ({
                        ...prev,
                        proposedIntervention: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
              </div>
            </div>
          </SectionCard>
        ) : null}

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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
