const express = require("express");
const drugsController = require("../controller/drugs.controller");
const router = express.Router();

router
    .route("/")
    .get(drugsController.getDrugsDetails)
    .post(drugsController.createDrugsDetails);

module.exports = router;
