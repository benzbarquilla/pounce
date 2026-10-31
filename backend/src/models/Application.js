const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    // Core info
    company: {
      type: String,
      required: [true, "Company or employer is required"],
      trim: true,
    },
    jobTitle: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    platform: {
      type: String,
      required: [true, "Platform is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: [
        "wishlist",
        "applied",
        "interview",
        "offer",
        "hired",
        "rejected",
        "ghosted",
      ],
      default: "applied",
    },

    // Dates
    dateApplied: {
      type: Date,
    },

    // Job details
    workType: {
      type: String,
      enum: ["onsite", "hybrid", "remote"],
    },
    location: {
      type: String,
      trim: true,
    },
    salaryRange: {
      type: String,
      trim: true,
    },
    jobLink: {
      type: String,
      trim: true,
    },

    // Contact
    contact: {
      type: String,
      trim: true,
    },

    notes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Application", applicationSchema);
