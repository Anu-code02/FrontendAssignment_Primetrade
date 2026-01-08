import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { validateBody, taskCreateSchema, taskUpdateSchema } from "../utils/validate.js";
import { createTask, getTasks, getTask, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = Router();
router.get("/", requireAuth, getTasks);
router.post("/", requireAuth, validateBody(taskCreateSchema), createTask);
router.get("/:id", requireAuth, getTask);
router.put("/:id", requireAuth, validateBody(taskUpdateSchema), updateTask);
router.delete("/:id", requireAuth, deleteTask);

export default router;
