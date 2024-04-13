const express = require("express");
const elementsController = require("../controller/elements.controller");
const router = express.Router();

router
    .route("/")
    .get(elementsController.getElementsDetails)
    .post(elementsController.createElementsDetails);
router.route("/:id").delete(elementsController.DeleteElementInfo);
router.route("/:id").get(elementsController.getElementByID);

module.exports = router;
