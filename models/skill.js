// All, One, Create, Delete

// const skills = require("../controllers/skills");

const skills = [
  { id: 123, name: "coding" },
  { id: 456, name: "shouting" },
  { id: 789, name: "googling" },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getAll() {
  return skills;
}

// Returns the skill with the given id
function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}

function create(skill) {
  skill.id = skills[skills.length - 1].id + 1;
  skills.push(skill);
}

function deleteOne(id) {
  // Find the index based on the id of the todo object
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}
