import Student from "../models/Student.js";
import Startup from "../models/Startup.js";
import NGO from "../models/NGO.js";
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerAdmin = async (req, res) => {
  try {
    const { username, password, adminSecret } = req.body;

    if (!username || !password || !adminSecret) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const ADMIN_CREATION_SECRET = process.env.ADMIN_CREATION_SECRET;

    if (adminSecret !== ADMIN_CREATION_SECRET) {
      return res
        .status(403)
        .json({ message: "Forbidden: Invalid admin creation secret" });
    }

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(409).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      username,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error("Register admin error:", error);
    res.status(500).json({
      message: "Failed to register admin",
      error: error.message,
    });
  }
};
export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1d" }
    );

    return res.status(200).json({ token, username: admin.username });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Login failed", error: err.message });
  }
};

export const getAllSubmissions = async (req, res) => {
  try {
    const students = await Student.find().lean();
    const startups = await Startup.find().lean();
    const ngos = await NGO.find().lean();

    const formattedStudents = students.map((s) => ({
      ...s,
      category: "College",
    }));
    const formattedStartups = startups.map((s) => ({
      ...s,
      category: "Startup",
    }));
    const formattedNgos = ngos.map((s) => ({ ...s, category: "NGO" }));

    const allSubmissions = [
      ...formattedStudents,
      ...formattedStartups,
      ...formattedNgos,
    ];

    // Sort by createdAt desc
    allSubmissions.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    res.status(200).json(allSubmissions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch submissions", error });
  }
};

export const updateSubmissionStatus = async (req, res) => {
  const { id } = req.params;
  const { status, category } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  try {
    let updatedSubmission;

    // Determine which collection to update
    if (category === "College" || category === "Student") {
      updatedSubmission = await Student.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
    } else if (category === "Startup") {
      updatedSubmission = await Startup.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
    } else if (category === "NGO") {
      updatedSubmission = await NGO.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
    } else {
      // Fallback: Try to find by ID in all (inefficient but safe)
      updatedSubmission = await Student.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      if (!updatedSubmission) {
        updatedSubmission = await Startup.findByIdAndUpdate(
          id,
          { status },
          { new: true }
        );
      }
      if (!updatedSubmission) {
        updatedSubmission = await NGO.findByIdAndUpdate(
          id,
          { status },
          { new: true }
        );
      }
    }

    if (!updatedSubmission) {
      return res.status(404).json({ message: "Submission not found" });
    }

    res
      .status(200)
      .json({ message: "Status updated", submission: updatedSubmission });
  } catch (error) {
    res.status(500).json({ message: "Failed to update status", error });
  }
};
