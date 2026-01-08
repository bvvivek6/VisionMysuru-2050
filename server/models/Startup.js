import mongoose from "mongoose";

const StartupSchema = new mongoose.Schema(
  {
    teamId: { type: String, required: true, unique: true },
    stage: { type: String, required: true },
    website: { type: String },
    organizationName: { type: String, required: true },
    city: { type: String, required: true },
    members: [
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        isLeader: { type: Boolean, default: false },
      },
    ],
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
        "finalist",
        "winner",
      ],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Startup = mongoose.model("Startup", StartupSchema);

export default Startup;
