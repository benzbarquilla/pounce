const express = require("express");
const router = express.Router();
const {
  createApplication,
  getApplications,
  getApplication,
  updateApplication,
  deleteApplication,
  getStats,
} = require("../controllers/applicationController");
const { protect } = require("../middleware/auth");

// All application routes require a logged-in user
router.use(protect);

// Base path: /api/applications
router.route("/").get(getApplications).post(createApplication);
router.get("/stats", getStats);
router
  .route("/:id")
  .get(getApplication)
  .patch(updateApplication)
  .delete(deleteApplication);

module.exports = router;
