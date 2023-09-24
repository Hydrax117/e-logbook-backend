const { default: mongoose } = require("mongoose");

const ReportsSchema = mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "students" },
  week: String,
  mon: String,
  tue: String,
  wed: String,
  thu: String,
  fri: String,
  sat: String,
  image: String,
  date: String,
  weekending: String,
  supervisorComment: String,
});

module.exports = mongoose.model("reports", ReportsSchema);
