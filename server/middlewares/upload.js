import multer from "multer";
import os from "os";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Use os.tmpdir() for cross-platform compatibility and serverless support (Vercel)
    cb(null, os.tmpdir());
  },
  filename: function (req, file, cb) {
    // Prepend timestamp to avoid name collisions
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;
