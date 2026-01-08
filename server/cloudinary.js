import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (path, folder = "testing") => {
  try {
    const data = await cloudinary.uploader.upload(path, {
      folder: folder,
      use_filename: true,
      unique_filename: false,
    });
    return { url: data.secure_url, public_id: data.public_id };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { cloudinary, uploadToCloudinary };
