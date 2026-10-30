const express = require("express");
const router = express.Router();
const {
  createApplication,
  getApplications,
  getApplication,
} = require("../controllers/applicationController");

router.route("/").get(getApplications).post(createApplication);
router.route("/:id").get(getApplication);

module.exports = router;
