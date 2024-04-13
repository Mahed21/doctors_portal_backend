const express = require("express");
const drugsController = require("../controller/drugs.controller");
const router = express.Router();

router
    .route("/")
    .get(drugsController.getDrugsDetails)
    .post(drugsController.createDrugsDetails);
router.route("/:id").delete(drugsController.DeleteDrugsInfo);
router.route("/:id").get(drugsController.getDrugByID);

module.exports = router;
