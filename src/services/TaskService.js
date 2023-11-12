import {
  getAllTasks as _getAllTasks,
  getTaskById,
  createTask as _createTask,
  updateTask,
  deleteTask as _deleteTask,
} from "../repository/taskRepository";
import ValidationError from "../exceptions/ValidationError";
import NotFoundError from "../exceptions/NotFoundError";
const TaskService = {
  getAllTasks: async () => {
    try {
      return await _getAllTasks();
    } catch (error) {
      throw new Error("Error al obtener las tareas", error);
    }
  },

  getOneTask: async (taskId) => {
    try {
      const task = await getTaskById(taskId);
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
      return await _createTask(taskData);
    } catch (error) {
      throw new ValidationError("Error al crear la tarea", error);
    }
  },

  putTask: async (taskId, updatedTaskData) => {
    try {
      const task = await updateTask(taskId, updatedTaskData, {
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
      const task = await _deleteTask(taskId);
      if (!task) {
        throw new NotFoundError("Tarea no encontrada");
      }
      return task;
    } catch (error) {
      throw new ValidationError("Error al eliminar la tarea");
    }
  },
};

export default TaskService;
