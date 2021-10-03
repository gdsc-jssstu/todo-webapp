const express = require("express");
const mongoose = require("mongoose");
// const Tasklist = require("./models/Todo")
const app = express();
const router = require("express").Router();

// connection to mongodb
try {
  mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connection SUCCESS");
} catch (error) {
  console.error("MongoDB connection FAIL");
  console.log(error);
  process.exit(1);
}

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(3000, () => console.log("Server started listening on port: 3000"));
