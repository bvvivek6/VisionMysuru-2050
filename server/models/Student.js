import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    teamId: { type: String, required: true, unique: true },
    institution: { type: String, required: true },
    department: { type: String, required: true },
    organizationName: { type: String, required: true },
    city: { type: String, required: true },
    members: [
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
        isLeader: { type: Boolean, default: false },
      },
    ],
    leaderAge: { type: Number, required: true },
    theme: { type: String, required: true },
    solutionName: { type: String, required: true },
    shortDescription: { type: String, required: true },
    idea_document: {
      name: { type: String, required: true },
      public_url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
    status: {
      type: String,
      enum: [
        "pending",
        "shortlisted_r1",
        "shortlisted_r2",
        "finaleist",
        "winner",
      ],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);

export default Student;
