const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

function createAuthResponse(user, message) {
 const token = jwt.sign(
  { id: user._id.toString() },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
 );

 return {
  message,
  token,
  user: {
   id: user._id.toString(),
   name: user.name,
   email: user.email
  }
 };
}

router.post("/register", async (req, res) => {
 const { name, email, password } = req.body || {};
 if (
  typeof name !== "string" ||
  typeof email !== "string" ||
  typeof password !== "string" ||
  !name.trim() ||
  !email.trim() ||
  password.length < 8
 ) {
  return res.status(400).json({
   message: "Enter your name, a valid email address, and a password of at least 8 characters."
  });
 }

 try {
  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser) {
   return res.status(409).json({ message: "An account with that email already exists." });
  }

  const user = new User({
   name: name.trim(),
   email: normalizedEmail,
   password: await bcrypt.hash(password, 12)
  });
  await user.save();

  return res.status(201).json({ message: "Registration successful. You can now log in." });
 } catch (error) {
  if (error.code === 11000) {
   return res.status(409).json({ message: "An account with that email already exists." });
  }
  console.error("Registration failed:", error);
  return res.status(500).json({ message: "Unable to register right now. Please try again." });
 }
});

router.post("/login", async (req, res) => {
 const { email, password } = req.body || {};
 if (typeof email !== "string" || typeof password !== "string" || !email.trim() || !password) {
  return res.status(400).json({ message: "Enter your email address and password." });
 }

 try {
  const user = await User.findOne({ email: email.trim().toLowerCase() });
  if (!user || !(await bcrypt.compare(password, user.password))) {
   return res.status(401).json({ message: "Email or password is incorrect." });
  }

  return res.status(200).json(createAuthResponse(user, "Login successful."));
 } catch (error) {
  console.error("Login failed:", error);
  return res.status(500).json({ message: "Unable to log in right now. Please try again." });
 }
});

router.get("/profile", protect, async (req, res) => {
 try {
  const user = await User.findById(req.user.id).select("-password");
  if (!user) {
   return res.status(404).json({ message: "User not found." });
  }

  return res.status(200).json({ user });
 } catch (error) {
  console.error("Profile lookup failed:", error);
  return res.status(500).json({ message: "Unable to load your profile right now." });
 }
});

module.exports = router;
