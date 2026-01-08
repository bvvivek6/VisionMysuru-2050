import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const MAX_PDF_BYTES = 2 * 1024 * 1024;
export const createEmptyMember = () => ({ name: "", email: "", phone: "" });

export const useSubmissionForm = (initialState, validateFn) => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  /* -------------------- helpers -------------------- */

  const updateForm = (patch) => setForm((prev) => ({ ...prev, ...patch }));

  const setStatusWithToast = (state, message, type = "error") => {
    setStatus({ state, message });
    toast[type](message);
  };

  /* -------------------- field setters -------------------- */

  const setField = (key) => (e) =>
    updateForm({
      [key]: e?.target?.type === "checkbox" ? e.target.checked : e.target.value,
    });

  const setMemberField = (index, key) => (e) =>
    setForm((prev) => {
      const members = [...prev.members];
      members[index] = { ...members[index], [key]: e.target.value };
      return { ...prev, members };
    });

  /* -------------------- members -------------------- */

  const addMember = () =>
    form.members.length < 3 &&
    updateForm({ members: [...form.members, createEmptyMember()] });

  const removeMember = (index) =>
    setForm((prev) => {
      if (prev.members.length <= 2) return prev;

      const members = prev.members.filter((_, i) => i !== index);
      const leaderIndex = index === +prev.leaderIndex ? "0" : prev.leaderIndex;

      return { ...prev, members, leaderIndex };
    });

  const setLeader = (index) => updateForm({ leaderIndex: index.toString() });

  /* -------------------- file -------------------- */

  const onPickPdf = ({ target }) => {
    const file = target?.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf")
      return setStatusWithToast("error", "Please upload a PDF file.");

    if (file.size > MAX_PDF_BYTES)
      return setStatusWithToast("error", "PDF must be 2MB or smaller.");

    updateForm({ pdfFile: file });
    setStatus({ state: "idle", message: "" });
  };

  /* -------------------- submit -------------------- */

  const buildFormData = () => {
    const fd = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (["members", "pdfFile", "leaderIndex", "consent"].includes(key))
        return;
      value && fd.append(key, value);
    });

    fd.append(
      "members",
      JSON.stringify(
        form.members.map((m, i) => ({
          ...m,
          isLeader: i === +form.leaderIndex,
        }))
      )
    );

    form.pdfFile && fd.append("pdfFile", form.pdfFile);

    return fd;
  };

  const confirmSubmit = async () => {
    setStatus({ state: "submitting", message: "Submitting..." });

    try {
      await axios.post("/api/v1/submissions", buildFormData());
      setStatusWithToast("success", "Idea submitted successfully!", "success");
    } catch (err) {
      setStatusWithToast(
        "error",
        err.response?.data?.message || "Failed to submit. Please try again."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateFn(form);
    if (error) return setStatusWithToast("error", error);

    setStatus({
      state: "confirming",
      message: "Please confirm your details.",
    });
  };

  return {
    form,
    status,
    set: setField,
    setMember: setMemberField,
    addMember,
    removeMember,
    setLeader,
    onPickPdf,
    handleSubmit,
    confirmSubmit,
    cancelSubmit: () => setStatus({ state: "idle", message: "" }),
  };
};
