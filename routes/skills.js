var express = require("express");
var router = express.Router();

// import the controller to get the index function
const skillController = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillController.index);
router.post("/", skillController.create);
router.get("/new", skillController.new);
router.get("/:id", skillController.show);
router.delete("/:id", skillController.delete);
router.get("/", function (req, res, next) {
  const allSkills = Skill.getAll();
  res.render("skills/index", { skills: allSkills });
});

// tell the model to get all of the todos
// respond to the client with a view listing all skills
module.exports = router;
