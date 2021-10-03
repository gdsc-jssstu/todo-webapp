const router = require("express").Router();
const Todo = require("../models/Todo");

// routes will be here
router.get("/", async (req, res) => {
  // get everything from db which is added as task
  const allTodo = await Todo.find();
  res.render("index", { todo: allTodo });
});

module.exports = router;
