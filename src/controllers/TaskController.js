import TaskService from "../services/TaskService.js";
import NotFoundError from "../exceptions/NotFoundError.js";
import TaskMapper from "../mapper/TaskMapper.js";
import TaskDTO from "../dto/TaskDTO.js";

const TaskController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await TaskService.getAllTasks();
      const taskResponseDTOs = TaskMapper.toResponseDTO(tasks);

      if (taskResponseDTOs.length === 0) {
        return res.status(404).json({ message: "There are no tasks" });
      }

      return res.json(taskResponseDTOs);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "There was an error while fetching the tasks" });
    }
  },

  getOneTask: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await TaskService.getOneTask(id);
      const taskResponse = res.json(TaskMapper.toResponseDTO(task));

      if (taskResponse == null) {
        return res
          .status(404)
          .json({ message: "There is no task with that id" });
      }
      return taskResponse;
    } catch (error) {
      return res
        .status(500)
        .json({ message: "There where an error while fetching the task" });
    }
  },

  createTask: async (req, res) => {
    const taskData = TaskDTO.build(req.body);

    try {
      const task = await TaskService.createTask(taskData);
      return res.json(TaskMapper.toResponseDTO(task));
    } catch (error) {
      return res
        .status(500)
        .json({ message: "There was an error while creating the task" });
    }
  },

  putTask: async (req, res) => {
    const { id } = req.params;
    const updatedTaskData = TaskDTO.build(req.body);

    try {
      const task = await TaskService.putTask(id, updatedTaskData);
      return res.json(TaskMapper.toResponseDTO(task));
    } catch (error) {
      return res
        .status(500)
        .json({ message: "There where an error while updating the task" });
    }
  },

  deleteTask: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await TaskService.deleteTask(id);
      return res.json(TaskMapper.toResponseDTO(task));
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res
          .status(404)
          .json({ message: "There is no task with that id" });
      } else {
        return res
          .status(500)
          .json({ message: "There where an error while fetching the task" });
      }
    }
  },
};

export default TaskController;
