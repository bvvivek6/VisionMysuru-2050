import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "No authentication header, authorization denied." });
    }

    const token = authHeader.replace("Bearer ", "");
    if (!token) {
      return res
        .status(401)
        .json({ message: "No authentication token, authorization denied." });
    }

    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback_secret"
    );
    req.admin = verified;
    next();
  } catch (err) {
    res
      .status(401)
      .json({ message: "Token verification failed, authorization denied." });
  }
};

export default auth;
