const mongoose = require("mongoose");

const drugsSchema = mongoose.Schema(
    {
        drugName: {
            type: String,
            required: true,
            trim: true,
        },
        groupName: {
            type: String,
            required: true,
            trim: true,
        },
        reason: {
            type: String,
            required: true,
            trim: true,
        },
        company: {
            type: String,
            required: true,
            trim: true,
        },
        dosage: {
            type: String,
            required: true,
            trim: true,
        },
        drugId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Drug = mongoose.model("drugsDetails", drugsSchema);

module.exports = Drug;
