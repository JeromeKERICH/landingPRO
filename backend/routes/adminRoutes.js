import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { authenticateAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Admin login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }
  res.status(401).json({ message: "Invalid credentials" });
});

// Get all signups (Protected)
router.get("/users", authenticateAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
