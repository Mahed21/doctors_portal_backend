const express = require("express");
const patientController = require("../controller/patient.controller");
const router = express.Router();
router
  .route("/")
  .get(patientController.getPatientDetails)
  .post(patientController.createPatientDetails);

module.exports = router;
