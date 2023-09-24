const { default: mongoose } = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: String,
  regNo: String,
  institution: String,
  institutionAdress: String,
  level: String,
  phone_number: String,
  guardianPhone: String,
  accountNumber: String,
  accountName: String,
  bankName: String,
  bankSortCode: String,
  courseDuration: String,
  course: String,
  institutionSupervisorName: String,
  institutionSupervisorPhone: String,
  institutionSupervisorEmail: String,
  period: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  token: String,
  role: String,
});

module.exports = mongoose.model("students", StudentSchema);
