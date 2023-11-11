const TaskService = require("../services/TaskService");

const TaskController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await TaskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      res
        .status(500)
        .json({ mensaje: error.message || "Error al obtener las tareas" });
    }
  },

  getOneTask: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await TaskService.getOneTask(id);
      res.json(task);
    } catch (error) {
      res.status(404).json({ mensaje: error.message || "Tarea no encontrada" });
    }
  },

  createTask: async (req, res) => {
    const taskData = req.body;
    try {
      const task = await TaskService.createTask(taskData);
      res.json(task);
    } catch (error) {
      res
        .status(500)
        .json({ mensaje: error.message || "Error al crear la tarea" });
    }
  },

  putTask: async (req, res) => {
    const { id } = req.params;
    const updatedTaskData = req.body;
    try {
      const task = await TaskService.putTask(id, updatedTaskData);
      res.json(task);
    } catch (error) {
      res.status(404).json({ mensaje: error.message || "Tarea no encontrada" });
    }
  },

  deleteTask: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await TaskService.deleteTask(id);
      res.json(task);
    } catch (error) {
      res.status(404).json({ mensaje: error.message || "Tarea no encontrada" });
    }
  },
};

module.exports = TaskController;
