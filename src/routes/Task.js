import { Router } from "express";
import taskController from "../controllers/TaskController";

const router = Router();
// Obtener
router.get("/tareas", taskController.getAllTasks);

// Obtener una
router.get("/tareas/:id", taskController.getOneTask);

// Crear una
router.post("/tareas", taskController.createTask);

// Actualizar by id
router.put("/tareas/:id", taskController.putTask);

// eliminar by id
router.delete("tareas/:id", taskController.deleteTask);
