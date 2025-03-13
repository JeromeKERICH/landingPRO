import jwt from "jsonwebtoken";

export const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    if (decoded.role !== "admin") return res.status(403).json({ message: "Unauthorized" });

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
