const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

const Tasklist = module.exports = new mongoose.model("Todo", TodoSchema);
module.exports = Tasklist;
