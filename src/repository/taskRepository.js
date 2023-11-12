// repository/taskRepository.js
const Task = require("../models/Task");

const taskRepository = {
  getAllTasks: async () => {
    return await Task.find();
  },

  getTaskById: async (taskId) => {
    return await Task.findById(taskId);
  },

  createTask: async (taskData) => {
    return await Task.create(taskData);
  },

  updateTask: async (taskId, updatedTaskData) => {
    return await Task.findByIdAndUpdate(taskId, updatedTaskData, { new: true });
  },

  deleteTask: async (taskId) => {
    return await Task.findByIdAndDelete(taskId);
  },
};

module.exports = taskRepository;
