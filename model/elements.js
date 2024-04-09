const mongoose = require("mongoose");

const elementsSchema = mongoose.Schema(
    {
        elementName: {
            type: String,
            required: true,
            trim: true,
        },
        reason: {
            type: String,
            required: true,
            trim: true,
        },
        position: {
            type: String,
            required: true,
            trim: true,
        },
        rules: {
            type: String,
            required: true,
            trim: true,
        },
        elementId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Element = mongoose.model("elementsDetails", elementsSchema);

module.exports = Element;
