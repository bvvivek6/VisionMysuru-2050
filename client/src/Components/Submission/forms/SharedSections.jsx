import React from "react";
import { FiCheckCircle, FiTrash, FiPlus } from "react-icons/fi";
import { Field, TextInput, TextArea, Select } from "./FormUI";
import { TOPIC_OPTIONS } from "../../../constants/content";
import { toast } from "react-hot-toast";

export const StatusMessage = ({ status }) => {
  if (!status.message) return null;
  return (
    <div
      className={`mb-6 rounded-xl p-4 text-sm ${
        status.state === "error"
          ? "bg-red-50 text-red-700 border border-red-200"
          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
      }`}
    >
      {status.state === "success" && <FiCheckCircle className="inline mr-2" />}
      {toast.message}
    </div>
  );
};

export const TeamMembers = ({
  form,
  addMember,
  removeMember,
  setLeader,
  setMember,
}) => (
  <div className="rounded-2xl bg-[var(--surface-2)] p-4 space-y-4">
    <div className="flex items-center justify-between">
      <p className="text-sm font-bold">Team Members (Min 2, Max 3)</p>
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
          <TextInput
            value={m.phone}
            onChange={setMember(idx, "phone")}
            placeholder="Phone Number"
            type="tel"
            className="sm:col-span-2"
          />
        </div>
      </div>
    ))}
  </div>
);

export const ProjectDetails = ({ form, set, onPickPdf }) => (
  <>
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
      <TextInput value={form.solutionName} onChange={set("solutionName")} />
    </Field>

    <Field label="Description" required>
      <TextArea
        value={form.shortDescription}
        onChange={set("shortDescription")}
        placeholder="How does this help Mysuru?"
      />
    </Field>

    <Field
      label="Upload PDF"
      required
      hint="PDF only · Max 2MB"
      className="space-y-2"
    >
      <input
        type="file"
        accept="application/pdf"
        onChange={onPickPdf}
        className="
      block w-full text-sm
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:bg-gray-100 file:text-gray-700
      hover:file:bg-gray-200
      border border-gray-300 rounded-md
      focus:outline-none focus:ring-2 focus:ring-gray-400
    "
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
        I confirm that all information provided is accurate and original.
      </span>
    </div>
  </>
);

export const SubmitButton = ({ status, confirmSubmit, cancelSubmit }) => {
  if (status.state === "confirming") {
    return (
      <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5 space-y-4">
        <div className="flex items-start gap-3">
          <div>
            <p className="text-xl font-semibold text-amber-900">
              ⚠️ Final Review
            </p>
            <p className="text-sm text-amber-800 mt-1 leading-relaxed">
              Please carefully review all entered information like name, email,
              phone number etc, before submitting. Once submitted, the status
              cannot be modified.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={confirmSubmit}
            className="flex-1 rounded-3xl bg-emerald-600 py-2.5 text-sm font-semibold text-white
                 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Confirm & Submit
          </button>

          <button
            type="button"
            onClick={cancelSubmit}
            className="flex-1 rounded-3xl border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-700
                 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Review Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      type="submit"
      disabled={status.state === "submitting" || status.state === "success"}
      className="w-full rounded-xl bg-[var(--accent)] py-3 font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
    >
      {status.state === "submitting" ? "Submitting..." : "Submit Idea"}
    </button>
  );
};
