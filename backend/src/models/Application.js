const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Company is required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Position is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: [
        "wishlist",
        "applied",
        "interview",
        "offer",
        "rejected",
        "ghosted",
      ],
      default: "applied",
    },
    dateApplied: {
      type: Date,
      default: Date.now,
    },
    jobLink: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    workType: {
      type: String,
      enum: ["onsite", "hybrid", "remote"],
    },
    salaryRange: {
      type: String,
      trim: true,
    },
    source: {
      type: String,
      trim: true,
    },
    contactPerson: {
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
