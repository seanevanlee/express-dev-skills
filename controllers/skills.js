// Implement index functionality for the skills resource
// Implement show functionality for the skills resource

const Skill = require("../models/skill");

function newSkill(req, res) {
  res.render("new", { title: "Dev Skills" }); // reference inside views folder
}

function show(req, res) {
  //console.log(req.params, " <- req.params");
  const skillFromDB = Skill.getOne(req.params.id);

  res.render("show", { title: "Dev Skills", skill: skillFromDB });
}

function index(req, res) {
  res.render("index", { title: "Dev Skills", skills: Skill.getAll() });
}

function create(req, res) {
  console.log("create controller function is firing");
  console.log(req.body, "<- req.body, is the contents of the form");
  Skill.create(req.body);
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  console.log("req.params.id: ", req.params.id);
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};
