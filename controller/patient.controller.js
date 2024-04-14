const Patient = require("../model/patient");
exports.getPatientDetails = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Parse page number from query parameters or default to 1
    const limit = 8; // Number of items per page
    const skip = (page - 1) * limit; // Calculate number of items to skip

    const patients = await Patient.find({}).skip(skip).limit(limit);
    const totalPatients = await Patient.countDocuments(); // Count total number of patients

    res.status(200).json({
      status: "success",
      message: "Data retrieved successfully",
      data: patients,
      totalPages: Math.ceil(totalPatients / limit), // Calculate total number of pages
      currentPage: page,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Failed to retrieve data",
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

exports.DeletePatientInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    //console.log(id);
    const result = await Patient.deleteOne({ _id: id });

    res.status(200).json({
      status: "success",
      message: "data Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to Delete",
      data: error.message,
    });
  }
};
exports.getPatientByID = async (req, res, next) => {
  const id = req.params.id;

  try {
    const patient = await Patient.find({ _id: id });
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
