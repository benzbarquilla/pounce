const express = require("express");
const router = express.Router();
const {
  createApplication,
  getApplications,
  getApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/applicationController");

// Application routes
router.route("/").get(getApplications).post(createApplication);
router
  .route("/:id")
  .get(getApplication)
  .patch(updateApplication)
  .delete(deleteApplication);

module.exports = router;
