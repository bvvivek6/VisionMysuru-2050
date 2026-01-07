const mongoose = require("mongoose");

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
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Startup", StartupSchema);
