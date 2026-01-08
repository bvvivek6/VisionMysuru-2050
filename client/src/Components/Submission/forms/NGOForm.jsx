import React from "react";
import { CATEGORY, TOPIC_OPTIONS } from "../../../constants/content";
import { useSubmissionForm, createEmptyMember } from "./useSubmissionForm";
import { Field, TextInput } from "./FormUI";
import {
  StatusMessage,
  TeamMembers,
  ProjectDetails,
  SubmitButton,
} from "./SharedSections";

const NGOForm = () => {
  const initialState = {
    category: CATEGORY.NGO,
    organizationName: "",
    city: "Mysuru",
    leaderIndex: "0",
    members: [createEmptyMember(), createEmptyMember()],
    theme: TOPIC_OPTIONS[0],
    solutionName: "",
    shortDescription: "",
    pdfFile: null,
    consent: false,
  };

  const validate = (form) => {
    if (!form.organizationName.trim()) return "Organization name is required.";

    const filledMembers = form.members.filter(
      (m) => m.name.trim() && m.email.trim()
    );
    if (filledMembers.length < 2)
      return "At least 2 team members are required.";

    const leader = form.members[parseInt(form.leaderIndex)];
    if (!leader.name.trim() || !leader.email.trim())
      return "Selected leader must have a name and email.";

    if (!form.solutionName.trim()) return "Solution name is required.";
    if (!form.pdfFile) return "Please upload your project PDF.";
    if (!form.consent) return "You must agree to the declaration.";

    return null;
  };

  const {
    form,
    status,
    set,
    setMember,
    addMember,
    removeMember,
    setLeader,
    onPickPdf,
    handleSubmit,
    confirmSubmit,
    cancelSubmit,
  } = useSubmissionForm(initialState, validate);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Organization Name" required>
          <TextInput
            value={form.organizationName}
            onChange={set("organizationName")}
          />
        </Field>
        <Field label="City" required>
          <TextInput value={form.city} onChange={set("city")} />
        </Field>
      </div>

      <TeamMembers
        form={form}
        addMember={addMember}
        removeMember={removeMember}
        setLeader={setLeader}
        setMember={setMember}
      />

      <ProjectDetails form={form} set={set} onPickPdf={onPickPdf} />

      <SubmitButton
        status={status}
        confirmSubmit={confirmSubmit}
        cancelSubmit={cancelSubmit}
      />
      <StatusMessage status={status} />
    </form>
  );
};

export default NGOForm;
