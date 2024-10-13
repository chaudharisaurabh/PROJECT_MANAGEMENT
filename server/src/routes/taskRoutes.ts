import { Router } from "express";
import { getTasks,createTask,updateTaskStatus } from "../controllers/taskController";

const router = Router();

router.get("/",getTasks);
router.post("/",createTask);
router.post("/:taskId/status",updateTaskStatus);

export default router;
