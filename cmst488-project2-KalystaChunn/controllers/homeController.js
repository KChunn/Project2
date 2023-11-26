const resources = require("../models/resources");

exports.showIndex = (req, res) => {
  res.render("index", {
    title: "index",
  });
};

exports.showResources = (req, res) => {
  const allResources = resources.getAllResources();
  res.render("resources", {
    title: "Resources",
    resources: allResources,
  });
};

exports.showBio = (req, res) => {
  const bioInfo = {
    title: "Biography",
    intro: "My name is Kalysta, and I am an amateur Graphic Designer and Artist. I want to experience graphic design and marketing before pursuing education to provide students with the opportunity to experience the impact of artwork adn give them a jumpstart on their professional careers.",
    expertise: "Graphic Design",
    goals: "Gain Experience in Graphic Design, Pursue Masters in Education",
    skills: ["Adobe Photoshop","Adobe Illustrator","Adobe InDesign","Adobe XD", "Adobe Dreamweaver", "HTML","Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel"]
};
