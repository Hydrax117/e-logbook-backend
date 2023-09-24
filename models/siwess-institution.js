const mongoose = require("mongoose");

const InstitutionsSchema = mongoose.Schema({
  name: String,
  address: String,
  phone: String,
});

module.exports = mongoose.model("siwess-institution", InstitutionsSchema);
