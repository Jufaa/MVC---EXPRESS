import Task from "../models/Task.js";

const taskRepository = {
  getAllTasksRepository: () => {
    return Task.find();
  },

  getTaskByIdRepository: (taskId) => {
    return Task.findById(taskId);
  },

  createTaskRepository: async (taskData) => {
    try {
      const newTask = new Task(taskData);

      return await newTask.save();
    } catch (error) {
      console.error("Error creating task:", error);
      throw error;
    }
  },

  updateTaskRepository: (taskId, updatedTaskData) => {
    return Task.findByIdAndUpdate(taskId, updatedTaskData, { new: true });
  },

  deleteTaskRepository: (taskId) => {
    return Task.findByIdAndDelete(taskId);
  },
};

export default taskRepository;
