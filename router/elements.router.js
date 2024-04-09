const express = require("express");
const elementsController = require("../controller/elements.controller");
const router = express.Router();

router
    .route("/")
    .get(elementsController.getElementsDetails)
    .post(elementsController.createElementsDetails);

module.exports = router;
