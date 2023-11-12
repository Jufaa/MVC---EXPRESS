const taskRepository = require("../repository/taskRepository");
const ValidationError = require("../exceptions/ValidationError");
const NotFoundError = require("../exceptions/NotFoundError");
const TaskService = {
  getAllTasks: async () => {
    try {
      return await taskRepository.getAllTasks();
    } catch (error) {
      throw new Error("Error al obtener las tareas", error);
    }
  },

  getOneTask: async (taskId) => {
    try {
      const task = await taskRepository.getTaskById(taskId);
      if (!task) {
        throw new NotFoundError("Tarea no encontrada");
      }
      return task;
    } catch (error) {
      throw new ValidationError("Error al obtener la tarea", error);
    }
  },

  createTask: async (taskData) => {
    try {
      return await taskRepository.createTask(taskData);
    } catch (error) {
      throw new ValidationError("Error al crear la tarea", error);
    }
  },

  putTask: async (taskId, updatedTaskData) => {
    try {
      const task = await taskRepository.updateTask(taskId, updatedTaskData, {
        new: true,
      });
      if (!task) {
        throw new NotFoundError("Tarea no encontrada");
      }
      return task;
    } catch (error) {
      throw new ValidationError("Error al actualizar la tarea");
    }
  },

  deleteTask: async (taskId) => {
    try {
      const task = await taskRepository.deleteTask(taskId);
      if (!task) {
        throw new NotFoundError("Tarea no encontrada");
      }
      return task;
    } catch (error) {
      throw new ValidationError("Error al eliminar la tarea");
    }
  },
};

module.exports = TaskService;
