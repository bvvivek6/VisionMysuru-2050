import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import submissionRoutes from "./routes/submissionRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use(express.json());

connectDB();

app.use("/api/v1/submissions", submissionRoutes);
app.use("/api/v1/winners", submissionRoutes);
app.use("/api/v1/admin", adminRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Vision Mysuru 2050 API is running" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

export default app;
