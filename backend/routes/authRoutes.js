const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });
    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
