import taskRepository from "../repository/taskRepository.js";
import ValidationError from "../exceptions/ValidationError.js";
import NotFoundError from "../exceptions/NotFoundError.js";
const TaskService = {
  getAllTasks: async () => {
    try {
      return taskRepository.getAllTasksRepository();
    } catch (error) {
      throw new Error("Error getting tasks", error);
    }
  },

  getOneTask: async (taskId) => {
    try {
      const task = taskRepository.getTaskByIdRepository(taskId);
      if (!task) {
        throw new NotFoundError("Task not found");
      }
      return task;
    } catch (error) {
      throw new ValidationError("Error getting task", error);
    }
  },

  createTask: async (taskData) => {
    try {
      return await taskRepository.createTaskRepository(taskData);
    } catch (error) {
      throw new ValidationError("Error creating task", error);
    }
  },

  putTask: async (taskId, updatedTaskData) => {
    try {
      return taskRepository.updateTaskRepository(taskId, updatedTaskData);
    } catch (error) {
      throw new ValidationError("Error update task");
    }
  },

  deleteTask: async (taskId) => {
    try {
      return taskRepository.deleteTaskRepository(taskId);
    } catch (error) {
      throw new ValidationError("Error delete task");
    }
  },
};

export default TaskService;
