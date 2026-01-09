import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import submissionRoutes from "./routes/submissionRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
const MONGO_URI = process.env.MONGO_URI;

let isConnected = false;
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "vision-mysuru",
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    throw err;
  }
}
app.use(async (req, res, next) => {
  if (!isConnected) {
    await connectDB();
  }
  next();
});

app.use("/api/v1/submissions", submissionRoutes);
app.use("/api/v1/winners", submissionRoutes);
app.use("/api/v1/admin", adminRoutes);

export default app;
