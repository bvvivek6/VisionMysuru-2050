import express from "express";
import { createSubmission } from "../controllers/submissionController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/", upload.single("pdfFile"), createSubmission);

export default router;
