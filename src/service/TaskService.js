const Task = require("../models/Task");

const TaskService = {
  getAllTasks: async () => {
    try {
      return await Task.find();
    } catch (error) {
      throw new Error("Error al obtener las tareas", error);
    }
  },

  getOneTask: async (taskId) => {
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        throw new Error("Tarea no encontrada");
      }
      return task;
    } catch (error) {
      throw new Error("Error al obtener la tarea", error);
    }
  },

  createTask: async (taskData) => {
    try {
      return await Task.create(taskData);
    } catch (error) {
      throw new Error("Error al crear la tarea", error);
    }
  },

  putTask: async (taskId, updatedTaskData) => {
    try {
      const task = await Task.findByIdAndUpdate(taskId, updatedTaskData, {
        new: true,
      });
      if (!task) {
        throw new Error("Tarea no encontrada");
      }
      return task;
    } catch (error) {
      throw new Error("Error al actualizar la tarea", error);
    }
  },

  deleteTask: async (taskId) => {
    try {
      const task = await Task.findByIdAndDelete(taskId);
      if (!task) {
        throw new Error("Tarea no encontrada");
      }
      return task;
    } catch (error) {
      throw new Error("Error al eliminar la tarea", error);
    }
  },
};

module.exports = TaskService;
