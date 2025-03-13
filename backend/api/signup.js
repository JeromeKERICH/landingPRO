import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow frontend requests
app.use(bodyParser.json()); // Parse JSON bodies

// Signup route
app.post("/api/signup", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  console.log("New Signup:", email);
  return res.status(200).json({ message: "Successfully signed up!" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
