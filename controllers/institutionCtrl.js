const siwessInstitutionModel = require("../models/siwess-institution");

module.exports.addInstitution = async (req, res) => {
  try {
    let find = req.body.name;
    let body = req.body;
    let ins = await siwessInstitutionModel.findOne({ name: find });
    if (!ins) {
      let institution = new siwessInstitutionModel(body);
      institution.save();
      return res.json({
        success: true,
        status: 200,
        message: "institution added successfully!!",
        data: institution,
      });
    } else {
      return res.json({
        success: false,
        status: 400,
        message: "this institution already exist in the database!!",
      });
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports.getAllInstitutions = async (req, res) => {
  try {
    let institutions = await siwessInstitutionModel.find();
    return res.json({
      success: true,
      status: 200,
      message: "all institutions!!",
      data: institutions,
    });
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports.getOneInstitution = async (req, res) => {
  var query = req.query;
  try {
    var institution = await siwessInstitutionModel.findOne(query);
    if (institution) {
      return res.json({
        success: true,
        statuscode: 200,
        data: institution,
        address: institution.address,
      });
    } else {
      return res.json({
        success: false,
        statuscode: 400,
        message: "institution does not exsit",
      });
    }
  } catch (error) {
    console.log("error", error.message);
  }
};
