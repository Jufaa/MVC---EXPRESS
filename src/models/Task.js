import { Schema, model } from "mongoose";
import TaskStatus, { PENDING } from "../enums/taskStatus";

const taskScheme = new Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: Object.values(TaskStatus),
    default: PENDING,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Task = model("Task", taskScheme);

export default Task;
