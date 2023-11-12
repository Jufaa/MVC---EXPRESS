const mongoose = require("mongoose");
const TaskStatus = require("../enums/taskStatus");

const taskScheme = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: Object.values(TaskStatus),
    default: TaskStatus.PENDING,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", taskScheme);

module.exports = Task;
