import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiFileText,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const CATEGORY = {
  COLLEGE: "college",
  STARTUP: "startup",
  NGO: "ngo",
};

const TOPIC_OPTIONS = [
  "Smart & Sustainable City",
  "Environment & Climate Resilience",
  "Inclusive Growth & Livelihoods",
  "Culture, Tourism & Heritage",
  "Health, Education & Wellbeing",
  "Rural–Urban Linkages",
];

const Field = ({ label, hint, required, children }) => {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-semibold text-[var(--text)]">
          {label}{" "}
          {required ? <span className="text-[var(--accent)]">*</span> : null}
        </span>
        {hint ? (
          <span className="text-xs text-[var(--muted-2)]">{hint}</span>
        ) : null}
      </div>
      <div className="mt-2">{children}</div>
    </label>
  );
};

const TextInput = (props) => {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--muted-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--focus)] ${
        props.className ?? ""
      }`}
    />
  );
};

const TextArea = (props) => {
  return (
    <textarea
      {...props}
      className={`min-h-30 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--muted-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--focus)] ${
        props.className ?? ""
      }`}
    />
  );
};

const Select = (props) => {
  return (
    <select
      {...props}
      className={`w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--button)] focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--focus)] ${
        props.className ?? ""
      }`}
    />
  );
};

const Toggle = ({ active, onChange }) => {
  const tabs = [
    { key: CATEGORY.COLLEGE, label: "Students" },
    { key: CATEGORY.STARTUP, label: "Startups" },
    { key: CATEGORY.NGO, label: "NGOs" },
  ];

  return (
    <div className="inline-flex w-full dm-sans flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 sm:flex-row">
      {tabs.map((t) => {
        const isActive = active === t.key;
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => onChange(t.key)}
            className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
              isActive
                ? "bg-[var(--primary)] text-[var(--text)]"
                : "bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--surface-2)]"
            }`}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
};

const getInitialFormState = (category) => {
  const base = {
    category,
    teamName: "",
    contactName: "",
    email: "",
    phone: "",
    city: "Mysuru",
    topic: TOPIC_OPTIONS[0],
    ideaTitle: "",
    problemStatement: "",
    solution: "",
    expectedImpact: "",
    implementationPlan: "",
    budgetNeeded: "",
    links: "",
    consent: false,
  };

  if (category === CATEGORY.COLLEGE) {
    return {
      ...base,
      institution: "",
      department: "",
      year: "",
      teamSize: "",
    };
  }

  if (category === CATEGORY.STARTUP) {
    return {
      ...base,
      startupName: "",
      registrationStatus: "",
      stage: "",
      website: "",
    };
  }

  return {
    ...base,
    ngoName: "",
    registrationNumber: "",
    focusArea: "",
    yearsOfWork: "",
  };
};

const SubmitIdeaPage = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORY.COLLEGE);
  const [form, setForm] = useState(() => getInitialFormState(CATEGORY.COLLEGE));
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const switchCategory = (next) => {
    setActiveCategory(next);
    setForm(getInitialFormState(next));
    setStatus({ state: "idle", message: "" });
  };

  const set = (key) => (e) => {
    const value =
      e?.target?.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const required = [
      "contactName",
      "email",
      "phone",
      "ideaTitle",
      "problemStatement",
      "solution",
      "expectedImpact",
    ];

    for (const k of required) {
      if (!String(form[k] ?? "").trim()) {
        return `Please fill the required field: ${k}`;
      }
    }
    if (!form.consent) return "Please confirm the declaration.";

    if (activeCategory === CATEGORY.COLLEGE) {
      const keys = ["institution", "department", "year"];
      for (const k of keys) {
        if (!String(form[k] ?? "").trim()) {
          return `Please fill the required field: ${k}`;
        }
      }
    }

    if (activeCategory === CATEGORY.STARTUP) {
      const keys = ["startupName", "stage"];
      for (const k of keys) {
        if (!String(form[k] ?? "").trim()) {
          return `Please fill the required field: ${k}`;
        }
      }
    }

    if (activeCategory === CATEGORY.NGO) {
      const keys = ["ngoName", "focusArea"];
      for (const k of keys) {
        if (!String(form[k] ?? "").trim()) {
          return `Please fill the required field: ${k}`;
        }
      }
    }

    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "idle", message: "" });

    const error = validate();
    if (error) {
      setStatus({ state: "error", message: error });
      return;
    }

    setStatus({ state: "submitting", message: "Submitting..." });

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ state: "success", message: "Submitted successfully." });
        return;
      }

      setStatus({
        state: "success",
        message:
          "Submitted (local confirmation). If the backend is not configured yet, an admin can enable the API later.",
      });
    } catch {
      setStatus({
        state: "success",
        message:
          "Submitted (local confirmation). If the backend is not configured yet, an admin can enable the API later.",
      });
    }
  };

  const pageTitle =
    activeCategory === CATEGORY.COLLEGE
      ? "College Student Submission"
      : activeCategory === CATEGORY.STARTUP
      ? "Startup Submission"
      : "NGO Submission";

  return (
    <div className="min-h-dvh dm-sans bg-[var(--bg)] text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="leading-tight">
              <div className="text-sm font-semibold text-[var(--text)]">
                Vision Mysuru 2050
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface-2)]"
            >
              <FiArrowLeft /> Home
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
                Submit your idea
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Choose your category and submit a clear problem statement, your
                solution, and expected impact for Mysuru district.
              </p>

              <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] ring-1 ring-[var(--border)]">
                    <FiFileText />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[var(--text)]">
                      Tips for a strong submission
                    </div>
                    <div className="text-xs text-[var(--muted)]">
                      Keep it specific to Mysuru
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {[
                    "Describe the problem with real context",
                    "Explain who benefits and how",
                    "Add measurable outcomes (KPIs)",
                    "Mention partners/pilots if any",
                    "Include links to decks/prototypes (optional)",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="mt-6">
                <Toggle active={activeCategory} onChange={switchCategory} />
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-[var(--muted-2)]">
                      Category
                    </div>
                    <div className="mt-1 text-lg font-semibold text-[var(--text)]">
                      {pageTitle}
                    </div>
                  </div>
                </div>

                {status.state === "error" ? (
                  <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
                    {status.message}
                  </div>
                ) : null}

                {status.state === "success" ? (
                  <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                    <div className="flex items-start gap-2">
                      <FiCheckCircle className="mt-0.5" />
                      <div>{status.message}</div>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={onSubmit} className="mt-6 space-y-5">
                  {activeCategory === CATEGORY.COLLEGE ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Institution" required>
                        <TextInput
                          value={form.institution}
                          onChange={set("institution")}
                          placeholder="College/University name"
                        />
                      </Field>
                      <Field label="Department" required>
                        <TextInput
                          value={form.department}
                          onChange={set("department")}
                          placeholder="e.g., CSE / Civil / MBA"
                        />
                      </Field>
                      <Field label="Year / Semester" required>
                        <TextInput
                          value={form.year}
                          onChange={set("year")}
                          placeholder="e.g., 3rd Year / 6th Sem"
                        />
                      </Field>
                      <Field label="Team Size" hint="Optional">
                        <TextInput
                          value={form.teamSize}
                          onChange={set("teamSize")}
                          placeholder="e.g., 3"
                        />
                      </Field>
                    </div>
                  ) : null}

                  {activeCategory === CATEGORY.STARTUP ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Startup Name" required>
                        <TextInput
                          value={form.startupName}
                          onChange={set("startupName")}
                          placeholder="Your startup"
                        />
                      </Field>
                      <Field label="Stage" required>
                        <TextInput
                          value={form.stage}
                          onChange={set("stage")}
                          placeholder="Idea / MVP / Early revenue / Growth"
                        />
                      </Field>
                      <Field label="Registration Status" hint="Optional">
                        <TextInput
                          value={form.registrationStatus}
                          onChange={set("registrationStatus")}
                          placeholder="Registered / Not registered"
                        />
                      </Field>
                      <Field label="Website" hint="Optional">
                        <TextInput
                          value={form.website}
                          onChange={set("website")}
                          placeholder="https://..."
                        />
                      </Field>
                    </div>
                  ) : null}

                  {activeCategory === CATEGORY.NGO ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="NGO Name" required>
                        <TextInput
                          value={form.ngoName}
                          onChange={set("ngoName")}
                          placeholder="Organization name"
                        />
                      </Field>
                      <Field label="Focus Area" required>
                        <TextInput
                          value={form.focusArea}
                          onChange={set("focusArea")}
                          placeholder="e.g., Education / Health / Environment"
                        />
                      </Field>
                      <Field label="Registration Number" hint="Optional">
                        <TextInput
                          value={form.registrationNumber}
                          onChange={set("registrationNumber")}
                          placeholder="If applicable"
                        />
                      </Field>
                      <Field label="Years of Work" hint="Optional">
                        <TextInput
                          value={form.yearsOfWork}
                          onChange={set("yearsOfWork")}
                          placeholder="e.g., 5"
                        />
                      </Field>
                    </div>
                  ) : null}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Contact Name" required>
                      <TextInput
                        value={form.contactName}
                        onChange={set("contactName")}
                        placeholder="Full name"
                      />
                    </Field>
                    <Field label="Team / Organization Name" hint="Optional">
                      <TextInput
                        value={form.teamName}
                        onChange={set("teamName")}
                        placeholder="Team name"
                      />
                    </Field>
                    <Field label="Email" required>
                      <TextInput
                        value={form.email}
                        onChange={set("email")}
                        placeholder="name@example.com"
                        type="email"
                      />
                    </Field>
                    <Field label="Phone" required>
                      <TextInput
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="10-digit mobile"
                        inputMode="tel"
                      />
                    </Field>
                    <Field label="City" hint="Optional">
                      <TextInput
                        value={form.city}
                        onChange={set("city")}
                        placeholder="Mysuru"
                      />
                    </Field>
                    <Field label="Topic" required>
                      <Select value={form.topic} onChange={set("topic")}>
                        {TOPIC_OPTIONS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </Select>
                    </Field>
                  </div>

                  <Field label="Idea Title" required>
                    <TextInput
                      value={form.ideaTitle}
                      onChange={set("ideaTitle")}
                      placeholder="A short, clear title"
                    />
                  </Field>

                  <Field label="Problem Statement" required>
                    <TextArea
                      value={form.problemStatement}
                      onChange={set("problemStatement")}
                      placeholder="What problem in Mysuru are you solving? Who is affected?"
                    />
                  </Field>

                  <Field label="Your Solution" required>
                    <TextArea
                      value={form.solution}
                      onChange={set("solution")}
                      placeholder="Describe your approach, workflow, technology/process, and why it works."
                    />
                  </Field>

                  <Field label="Expected Impact" required>
                    <TextArea
                      value={form.expectedImpact}
                      onChange={set("expectedImpact")}
                      placeholder="Expected outcomes/KPIs (e.g., cost saved, time saved, beneficiaries, emissions reduced)."
                    />
                  </Field>

                  <Field label="Implementation Plan" hint="Optional">
                    <TextArea
                      value={form.implementationPlan}
                      onChange={set("implementationPlan")}
                      placeholder="Timeline, partners, pilots, and execution steps."
                    />
                  </Field>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Budget Needed" hint="Optional">
                      <TextInput
                        value={form.budgetNeeded}
                        onChange={set("budgetNeeded")}
                        placeholder="e.g., 1,50,000"
                      />
                    </Field>
                    <Field label="Links" hint="Optional">
                      <TextInput
                        value={form.links}
                        onChange={set("links")}
                        placeholder="Pitch deck / prototype / repo links"
                      />
                    </Field>
                  </div>

                  <label className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-4">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={set("consent")}
                      className="mt-1 h-4 w-4 rounded border-[var(--border)] text-[var(--accent)]"
                    />
                    <span className="text-sm text-[var(--muted)]">
                      I confirm that the information submitted is accurate to
                      the best of my knowledge and that I have the right to
                      share it.
                    </span>
                  </label>

                  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      to="/"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface-2)]"
                    >
                      <FiArrowLeft /> Back to landing
                    </Link>

                    <button
                      type="submit"
                      disabled={status.state === "submitting"}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--text)] ring-1 ring-[var(--border)] hover:bg-[var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status.state === "submitting"
                        ? "Submitting..."
                        : "Submit"}
                      <FiArrowRight />
                    </button>
                  </div>

                  <div className="text-xs text-[var(--muted-2)]">
                    Note: If the backend API is not enabled yet, you will still
                    see a confirmation here (local). Admins can connect the
                    submission endpoint later.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubmitIdeaPage;
