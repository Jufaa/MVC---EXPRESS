import express from "express";
import taskController from "../controllers/TaskController.js";
const router = express.Router();
// Get all
router.get("/tasks", taskController.getAllTasks);

// Get one
router.get("/task/:id", taskController.getOneTask);

// Create one
router.post("/task-create", taskController.createTask);

// Update by id
router.put("/task/:id", taskController.putTask);

// Delete by id
router.delete("/task/delete/:id", taskController.deleteTask);

export default router;
