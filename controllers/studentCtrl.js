const studentModel = require("../models/student");

module.exports.allStudents = async (req, res) => {
  try {
    const students = await studentModel.find();
    return res.json({
      success: true,
      status: 200,
      message: "list of all students",
      data: students,
    });
  } catch (error) {
    return res.json({
      success: false,
      status: 400,
      message: error.message,
    });
  }
};
