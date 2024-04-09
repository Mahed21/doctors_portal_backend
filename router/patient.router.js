const express = require("express");
const patientController = require("../controller/patient.controller");
const router = express.Router();
router
  .route("/")
  .get(patientController.getPatientDetails)
  .post(patientController.createPatientDetails);
router.route("/:id").delete(patientController.DeletePatientInfo);
router.route("/:id").get(patientController.getPatientByID);

module.exports = router;
