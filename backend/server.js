import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import User from "./models/User.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config(); // ✅ Load environment variables first

const app = express();

// ✅ Allow both production & development origins
const allowedOrigins = [
  "https://landingpro.trichenest.com",
  "http://localhost:5173"
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type"],
  })
);

// ✅ Handle preflight requests for CORS
app.options("*", cors());

app.use(express.json());

// ✅ Resend email sender
const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });

// ✅ Signup Route with Email Confirmation
app.post("/api/signup", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ email });
    await newUser.save();

    // ✅ Send confirmation email using Resend
    try {
      const response = await resend.emails.send({
        from: "info@landingpro.trichenest.com", // ✅ Ensure this domain is verified in Resend
        to: email,
        subject: "Signup Confirmation",
        text: `Hello, you have successfully signed up with ${email}. Glad to see you around, We are coming with exciting deals. Stay tuned. Welcome aboard!`,
      });
      console.log("Email Sent:", response);
    } catch (error) {
      console.error("Email Error:", error);
    }

    return res.status(201).json({ message: "Successfully signed up! Check your email for confirmation.", user: newUser });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ User Routes
app.use("/api/admin", adminRoutes);

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Fetch Users Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/users/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error("Fetch User Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Start Server (Only Once)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
