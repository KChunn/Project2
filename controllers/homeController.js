const resources = require("../models/resources");

exports.showIndex = (req, res) => {
  res.render("index", {
    title: "index",
  });
};

exports.showResources = (req, res) => {
  // TODO: Implement render for showResources
};

exports.showBio = (req, res) => {
  // TODO: Implement render for showBio with properties for:
  // title
  // intro
  // expertise
  // goals
  // skills
};
