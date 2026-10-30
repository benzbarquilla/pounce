const mongoose = require("mongoose");
const Application = require("../models/Application");

// Drop blank fields so empty form inputs ("") are never saved
const cleanBody = (body) => {
  const cleaned = {};
  for (const [key, value] of Object.entries(body)) {
    if (typeof value === "string" && value.trim() === "") continue;
    cleaned[key] = value;
  }
  return cleaned;
};

// POST
const createApplication = async (req, res) => {
  try {
    const application = await Application.create(cleanBody(req.body));
    res.status(201).json(application);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ message: messages.join(",") });
    }
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET by id
const getApplication = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Application id" });
    }

    const application = await Application.findById(id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json(application);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createApplication, getApplications, getApplication };
