const mongoose = require("mongoose");

const taskScheme = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", taskScheme);

module.exports = Task;
