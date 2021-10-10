const router = require("express").Router();
const Todo = require("../models/Todo");

// routes
router.post("/add/todo", (req, res) => {
  const { todo } = req.body;
  const newTodo = new Todo({ todo });

  // save the todo
  newTodo
    .save()
    .then(() => {
      console.log("Successfully added todo!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  // delete todo by its Mongo ID
  Todo.findByIdAndDelete(id).then(() => {
      console.log("Successfully deleted todo!");
      res.redirect("/");
  })
  .catch((err) => console.log(err));
})

module.exports = router;
