import {
  find,
  findById,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
} from "../models/Task";

const taskRepository = {
  getAllTasks: async () => {
    return await find();
  },

  getTaskById: async (taskId) => {
    return await findById(taskId);
  },

  createTask: async (taskData) => {
    return await create(taskData);
  },

  updateTask: async (taskId, updatedTaskData) => {
    return await findByIdAndUpdate(taskId, updatedTaskData, { new: true });
  },

  deleteTask: async (taskId) => {
    return await findByIdAndDelete(taskId);
  },
};

export default taskRepository;
