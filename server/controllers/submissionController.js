import fs from "fs";
import Student from "../models/Student.js";
import NGO from "../models/NGO.js";
import Startup from "../models/Startup.js";
import { uploadToCloudinary } from "../cloudinary.js";

const createSubmission = async (req, res) => {
  try {
    const {
      category,
      organizationName,
      city,
      members,
      theme,
      solutionName,
      shortDescription,
      institution,
      department,
      leaderAge,
      stage,
      website,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No PDF file uploaded" });
    }

    let parsedMembers;
    if (typeof members === "string") {
      try {
        parsedMembers = JSON.parse(members);
      } catch {
        return res.status(400).json({ message: "Invalid members format" });
      }
    } else if (Array.isArray(members)) {
      parsedMembers = members;
    } else {
      return res.status(400).json({ message: "Invalid members format" });
    }

    let uploadResult;
    try {
      uploadResult = await uploadToCloudinary(req.file.path, "submissions");
    } finally {
      fs.unlink(req.file.path, () => {});
    }

    const idea_document = {
      name: req.file.originalname,
      public_url: uploadResult.url,
      public_id: uploadResult.public_id,
    };

    const basePayload = {
      teamId: `TEAM-${Date.now()}`,
      organizationName,
      city,
      members: parsedMembers,
      theme,
      solutionName,
      shortDescription,
      idea_document,
      status: "pending",
    };

    let submission;

    switch (category) {
      case "college":
        submission = new Student({
          ...basePayload,
          institution,
          department,
          leaderAge: Number(leaderAge),
        });
        break;

      case "startup":
        submission = new Startup({
          ...basePayload,
          stage,
          website,
        });
        break;

      case "ngo":
        submission = new NGO(basePayload);
        break;

      default:
        return res.status(400).json({ message: "Invalid category" });
    }

    await submission.save();

    res.status(201).json({
      message: "Submission created successfully",
      submission,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export { createSubmission };
