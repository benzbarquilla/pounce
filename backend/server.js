require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db.js");

const app = express();

// Connect to databse
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/applications", require("./src/routes/applicationRoutes.js"));

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Pounce API is running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
