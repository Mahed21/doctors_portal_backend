const mongoose = require("mongoose");
const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      trim: true,
    },
    number: {
      type: Number,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    patientId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Patient = mongoose.model("patientDetails", patientSchema);

module.exports = Patient;
