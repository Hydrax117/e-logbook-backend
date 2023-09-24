const reportsModel = require("../models/reports");

module.exports.NewReport = async (req, res) => {
  try {
    let report = new reportsModel(req.body);
    report.save();
    return res.json({
      success: true,
      status: 200,
      message: "report added successfully",
      data: report,
    });
  } catch (error) {}
};

module.exports.AddReport = async (req, res) => {
  try {
    const a = req.query;
    console.log(a);
    const data = req.body;

    const b = await reportsModel.findOneAndUpdate(a, data, { new: true });

    return res.json({
      success: true,
      message: "report pushed in  successfully",
      data: b,
    });
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.getReports = async (req, res) => {
  try {
    const query = req.query;
    const report = await reportsModel.find(query).populate("student");
    if (report) {
      return res.json({
        succes: true,
        message: "all reports",
        data: report,
      });
    } else {
      return res.json({
        success: false,
        status: 400,
        message: "week already exsit",
      });
    }
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.getAllReports = async (req, res) => {
  try {
    const query = req.query;
    const report = await reportsModel.find(query).select("report");
    if (report) {
      return res.json({
        succes: true,
        message: "all reports",
        data: report,
      });
    } else {
      return res.json({
        success: false,
        status: 400,
        message: "week already exsit",
      });
    }
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.getReport = async (req, res) => {
  try {
    const query = req.query;
    const report = await reportsModel.findOne(query);
    if (report) {
      return res.json({
        succes: true,
        message: "all reports",
        data: report,
      });
    } else {
      return res.json({
        success: false,
        status: 400,
        message: "report not found",
      });
    }
  } catch (error) {
    return res.send(error.message);
  }
};
