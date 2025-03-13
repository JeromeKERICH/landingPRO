import User from "../models/User.js";
import { sendEmail } from "../config/nodemailer.js";

export const signupUser = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already registered" });

    const newUser = new User({ email });
    await newUser.save();

    // Send user confirmation email
    await sendEmail(email, "Signup Successful", "Thank you for signing up!");

    // Send admin notification email
    await sendEmail(
      process.env.ADMIN_EMAIL,
      "New User Signup",
      `A new user signed up with email: ${email}`
    );

    res.status(201).json({ message: "Signup successful! Confirmation email sent." });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
