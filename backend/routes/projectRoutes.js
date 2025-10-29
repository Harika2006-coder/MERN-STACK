const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// Add project
router.post("/add", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json({ message: "Project added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add project" });
  }
});

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

module.exports = router; // ✅ MUST BE HERE
