import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiTrash, FiPlus } from "react-icons/fi";
import RulesAndRegulations from "../Components/Submission/RulesAndRegulations";
import FooterSection from "../Components/FooterSection";
import SubmissionHeader from "../Components/Submission/SubmissionHeader";
import SubmissionNav from "../Components/Submission/SubmissionNav";
import { TOPIC_OPTIONS, CATEGORY } from "../constants/content";

const MAX_PDF_BYTES = 2 * 1024 * 1024;

const createEmptyMember = () => ({ name: "", email: "" });

const Field = ({ label, hint, required, children }) => (
  <label className="block">
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-sm font-semibold text-[var(--text)]">
        {label} {required && <span className="text-[var(--accent)]">*</span>}
      </span>
      {hint && <span className="text-xs text-[var(--muted-2)]">{hint}</span>}
    </div>
    <div className="mt-2">{children}</div>
  </label>
);

const TextInput = (props) => (
  <input
    {...props}
    className={`w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--muted-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--focus)] ${
      props.className ?? ""
    }`}
  />
);

const TextArea = (props) => (
  <textarea
    {...props}
    className={`min-h-30 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--muted-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--focus)] ${
      props.className ?? ""
    }`}
  />
);

const Select = (props) => (
  <select
    {...props}
    className={`w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--focus)] ${
      props.className ?? ""
    }`}
  />
);

const Toggle = ({ active, onChange }) => {
  const tabs = [
    { key: CATEGORY.COLLEGE, label: "Students" },
    { key: CATEGORY.STARTUP, label: "Startups" },
    { key: CATEGORY.NGO, label: "NGOs" },
  ];

  return (
    <div className="inline-flex w-full flex-row gap-2  sm:flex-row">
      {tabs.map((t) => (
        <button
          key={t.key}
          type="button"
          onClick={() => onChange(t.key)}
          className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
            active === t.key
              ? "bg-[var(--primary)] text-white"
              : "text-[var(--muted)] hover:bg-[var(--surface-2)]"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
};

const getInitialFormState = (category) => ({
  category,
  organizationName: "",
  city: "Mysuru",
  leaderIndex: "0",
  leaderAge: "",
  // College specific
  institution: "",
  department: "",
  year: "",
  teamSize: "",
  // Startup specific
  startupName: "",
  stage: "",
  registrationStatus: "",
  website: "",
  // General
  members: [createEmptyMember(), createEmptyMember()],
  theme: TOPIC_OPTIONS[0],
  solutionName: "",
  shortDescription: "",
  pdfFile: null,
  demoLink: "",
  budget: "",
  consent: false,
});

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

  const setMember = (index, key) => (e) => {
    const value = e?.target?.value ?? "";
    setForm((prev) => {
      const members = prev.members.map((m, i) =>
        i === index ? { ...m, [key]: value } : m
      );
      return { ...prev, members };
    });
  };

  const addMember = () => {
    if (form.members.length < 3) {
      setForm((prev) => ({
        ...prev,
        members: [...prev.members, createEmptyMember()],
      }));
    }
  };

  const removeMember = (index) => {
    if (form.members.length > 2) {
      setForm((prev) => {
        const newMembers = prev.members.filter((_, i) => i !== index);
        let newLeaderIndex = parseInt(prev.leaderIndex);

        if (index < newLeaderIndex) {
          newLeaderIndex -= 1;
        } else if (index === newLeaderIndex) {
          newLeaderIndex = 0;
        }

        return {
          ...prev,
          members: newMembers,
          leaderIndex: newLeaderIndex.toString(),
        };
      });
    }
  };

  const setLeader = (index) => {
    setForm((prev) => ({ ...prev, leaderIndex: index.toString() }));
  };

  const onPickPdf = (e) => {
    const file = e?.target?.files?.[0] ?? null;
    if (!file) return;

    if (file.type !== "application/pdf") {
      setStatus({ state: "error", message: "Please upload a PDF file." });
      e.target.value = "";
      return;
    }

    if (file.size > MAX_PDF_BYTES) {
      setStatus({ state: "error", message: "PDF must be 2MB or smaller." });
      e.target.value = "";
      return;
    }

    setStatus({ state: "idle", message: "" });
    setForm((prev) => ({ ...prev, pdfFile: file }));
  };

  const validate = () => {
    if (!form.organizationName.trim())
      return "Organization/College name is required.";

    const filledMembers = form.members.filter(
      (m) => m.name.trim() && m.email.trim()
    );
    if (filledMembers.length < 2)
      return "At least 2 team members are required.";

    const leader = form.members[parseInt(form.leaderIndex)];
    if (!leader.name.trim() || !leader.email.trim())
      return "Selected leader must have a name and email.";

    if (activeCategory === CATEGORY.COLLEGE && !form.leaderAge)
      return "Leader age is required for students.";
    if (!form.solutionName.trim()) return "Solution name is required.";
    if (!form.pdfFile) return "Please upload your project PDF.";
    if (!form.consent) return "You must agree to the declaration.";

    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ state: "error", message: error });
      return;
    }

    setStatus({ state: "submitting", message: "Submitting..." });

    try {
      // Simulate API call
      console.log("Form Data:", form);
      setStatus({
        state: "success",
        message: "Idea submitted successfully! Our team will contact you soon.",
      });
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus({
        state: "error",
        message: "Failed to submit. Please try again.",
      });
    }
  };

  return (
    <motion.div
      className=" overflow-hidden flex flex-col dm-sans bg-[var(--bg)] text-[var(--text)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SubmissionNav />
      <main className=" ">
        <SubmissionHeader />
        <RulesAndRegulations />
        <div className=" max-w-6xl mx-auto my-10 px-4 md:px-0">
          <Toggle active={activeCategory} onChange={switchCategory} />
          <div className="mt-3 rounded-3xl border-y-4 border border-[var(--accent)] p-6 sm:p-8">
            {status.message && (
              <div
                className={`mb-6 rounded-xl p-4 text-sm ${
                  status.state === "error"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                }`}
              >
                {status.state === "success" && (
                  <FiCheckCircle className="inline mr-2" />
                )}
                {status.message}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              {activeCategory === CATEGORY.COLLEGE && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Institution" required>
                    <TextInput
                      value={form.institution}
                      onChange={set("institution")}
                      placeholder="College name"
                    />
                  </Field>
                  <Field label="Department" required>
                    <TextInput
                      value={form.department}
                      onChange={set("department")}
                      placeholder="e.g. CSE"
                    />
                  </Field>
                </div>
              )}

              {activeCategory === CATEGORY.STARTUP && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Startup Stage" required>
                    <TextInput
                      value={form.stage}
                      onChange={set("stage")}
                      placeholder="MVP / Seed"
                    />
                  </Field>
                  <Field label="Website">
                    <TextInput
                      value={form.website}
                      onChange={set("website")}
                      placeholder="https://..."
                    />
                  </Field>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label={
                    activeCategory === CATEGORY.COLLEGE
                      ? "College Name"
                      : "Organization Name"
                  }
                  required
                >
                  <TextInput
                    value={form.organizationName}
                    onChange={set("organizationName")}
                  />
                </Field>
                <Field label="City" required>
                  <TextInput value={form.city} onChange={set("city")} />
                </Field>
              </div>

              <div className="rounded-2xl bg-[var(--surface-2)] p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold">
                    Team Members (Min 2, Max 3)
                  </p>
                  {form.members.length < 3 && (
                    <button
                      type="button"
                      onClick={addMember}
                      className="flex items-center gap-1 text-xs font-bold text-[var(--accent)] hover:underline"
                    >
                      <FiPlus /> Add Member
                    </button>
                  )}
                </div>
                {form.members.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-3 border-b border-[var(--border)] pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[var(--muted)]">
                        Member {idx + 1}
                      </span>
                      <div className="flex items-center gap-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="teamLeader"
                            checked={parseInt(form.leaderIndex) === idx}
                            onChange={() => setLeader(idx)}
                            className="accent-[var(--accent)]"
                          />
                          <span className="text-xs font-medium">Leader</span>
                        </label>

                        {form.members.length > 2 && (
                          <button
                            type="button"
                            onClick={() => removeMember(idx)}
                            className="text-red-500 hover:text-red-700"
                            title="Remove Member"
                          >
                            <FiTrash />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <TextInput
                        value={m.name}
                        onChange={setMember(idx, "name")}
                        placeholder="Name"
                      />
                      <TextInput
                        value={m.email}
                        onChange={setMember(idx, "email")}
                        placeholder="Email"
                        type="email"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {activeCategory === CATEGORY.COLLEGE && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Leader Age" required>
                    <TextInput
                      type="number"
                      value={form.leaderAge}
                      onChange={set("leaderAge")}
                    />
                  </Field>
                </div>
              )}

              <Field label="Theme" required>
                <Select value={form.theme} onChange={set("theme")}>
                  {TOPIC_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="Solution Name" required>
                <TextInput
                  value={form.solutionName}
                  onChange={set("solutionName")}
                />
              </Field>

              <Field label="Description" required>
                <TextArea
                  value={form.shortDescription}
                  onChange={set("shortDescription")}
                  placeholder="How does this help Mysuru?"
                />
              </Field>

              <Field label="Upload PDF (Max 2MB)" required hint=".pdf only">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={onPickPdf}
                  className="text-sm block w-full"
                />
              </Field>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={set("consent")}
                  className="h-4 w-4 rounded border-[var(--border)] text-[var(--accent)]"
                />
                <span className="text-xs text-[var(--muted)]">
                  I confirm that all information provided is accurate and
                  original.
                </span>
              </div>

              <button
                type="submit"
                disabled={status.state === "submitting"}
                className="w-full rounded-xl bg-[var(--accent)] py-3 font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {status.state === "submitting"
                  ? "Submitting..."
                  : "Submit Idea"}
              </button>
            </form>
          </div>
        </div>
      </main>
      <FooterSection />
    </motion.div>
  );
};

export default SubmitIdeaPage;
