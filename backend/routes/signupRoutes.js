import express from "express";
import Signup from "../models/Signup.js";  // Ensure this model exists

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const newSignup = new Signup({ email });
    await newSignup.save();

    res.status(201).json({ message: "Successfully signed up!" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
