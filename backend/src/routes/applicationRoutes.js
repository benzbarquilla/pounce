const express = require("express");
const router = express.Router();
const {
  createApplication,
  getApplications,
  getApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/applicationController");

// Base path: /api/applications
router.route("/").get(getApplications).post(createApplication);
router
  .route("/:id")
  .get(getApplication)
  .patch(updateApplication)
  .delete(deleteApplication);

module.exports = router;
