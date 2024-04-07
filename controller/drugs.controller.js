const Drug = require("../model/drugs");

exports.getDrugsDetails = async (req, res) => {
    try {
        const drug = await Drug.find({});
        res.status(200).json({
            status: "success",
            message: "data get Successfully",
            data: drug,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "data failed to get",
            data: error.message,
        });
    }
};


exports.createDrugsDetails = async (req, res, next) => {
    try {
        const drug = new Drug(req.body);
        const result = await drug.save();
        res.status(200).json({
            status: "success",
            message: "New drug data added Successfully",
            data: drug,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "data failed to saved",
            data: error.message,
        });
    }
};
