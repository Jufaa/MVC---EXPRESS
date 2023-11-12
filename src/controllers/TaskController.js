import TaskService from "../services/TaskService";
import NotFoundError from "../exceptions/NotFoundError";
import ValidationError from "../exceptions/ValidationError";
import TaskDTO from "../dto/TaskDTO";
import { TaskReponseDTO } from "../mapper/taskMapper";

const TaskController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await TaskService.getAllTasks();
      const mappedTasks = tasks.map((task) =>
        TaskReponseDTO(
          new TaskDTO(task._id, task.title, task.description, task.status)
        )
      );

      res.json(mappedTasks);
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ mensaje: error.message });
      } else if (error instanceof ValidationError) {
        res.status(500).json({ mensaje: error.message });
      } else {
        res.status(500).json({ mensaje: "Error interno del servidor" });
      }
    }
  },

  getOneTask: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await TaskService.getOneTask(id);
      const mapTask = TaskReponseDTO(
        new TaskDTO(task._id, task.title, task.description, task.status)
      );

      res.json(mapTask);
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ mensaje: error.message });
      } else if (error instanceof ValidationError) {
        res.status(500).json({ mensaje: error.message });
      } else {
        res.status(500).json({ mensaje: "Error interno del servidor" });
      }
    }
  },

  createTask: async (req, res) => {
    const taskData = req.body;
    try {
      const task = await TaskService.createTask(taskData);
      const mapperTask = TaskReponseDTO(
        new TaskDTO(task._id, task.title, task.description, task.status)
      );
      res.json(mapperTask);
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ mensaje: error.message });
      } else if (error instanceof ValidationError) {
        res.status(500).json({ mensaje: error.message });
      } else {
        res.status(500).json({ mensaje: "Error interno del servidor" });
      }
    }
  },

  putTask: async (req, res) => {
    const { id } = req.params;
    const updatedTaskData = req.body;
    try {
      const task = await TaskService.putTask(id, updatedTaskData);
      const mapperTask = TaskReponseDTO(
        new TaskDTO(task._id, task.title, task.description, task.status)
      );

      res.json(mapperTask);
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ mensaje: error.message });
      } else if (error instanceof ValidationError) {
        res.status(500).json({ mensaje: error.message });
      } else {
        res.status(500).json({ mensaje: "Error interno del servidor" });
      }
    }
  },

  deleteTask: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await TaskService.deleteTask(id);
      const mapperTask = TaskReponseDTO(
        new TaskDTO(task._id, task.title, task.description, task.status)
      );

      res.json(mapperTask);
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ mensaje: error.message });
      } else if (error instanceof ValidationError) {
        res.status(500).json({ mensaje: error.message });
      } else {
        res.status(500).json({ mensaje: "Error interno del servidor" });
      }
    }
  },
};

export default TaskController;
