const Element = require("../model/elements");

exports.getElementsDetails = async (req, res) => {
    try {
        const element = await Element.find({});
        res.status(200).json({
            status: "success",
            message: "data get Successfully",
            data: element,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "data failed to get",
            data: error.message,
        });
    }
};


exports.createElementsDetails = async (req, res, next) => {
    try {
        const element = new Element(req.body);
        const result = await element.save();
        res.status(200).json({
            status: "success",
            message: "New element data added Successfully",
            data: element,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "data failed to saved",
            data: error.message,
        });
    }
};


exports.DeleteElementInfo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Element.deleteOne({ _id: id });

        res.status(200).json({
            status: "success",
            message: "Data Deleted Successfully",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Data failed to Delete",
            data: error.message,
        });
    }
};


exports.getElementByID = async (req, res, next) => {
    const id = req.params.id;

    try {
        const element = await Element.find({ _id: id });
        res.status(200).json({
            status: "success",
            message: "Data get Successfully",
            data: element,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Data failed to get",
            data: error.message,
        });
    }
};