const Patient = require("../model/patient");
exports.getPatientDetails = async (req, res) => {
  try {
    const patient = await Patient.find({});
    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: patient,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

//save booking details
exports.createPatientDetails = async (req, res, next) => {
  try {
    const patient = new Patient(req.body);
    const result = await patient.save();
    res.status(200).json({
      status: "success",
      message: "New patient data added Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to saved",
      data: error.message,
    });
  }
};
