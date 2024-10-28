import { Router } from "express";
import * as ShowController from "../controllers/showController";
const router = Router();

router.get("/", ShowController.getAll as any);
router.get("/:id", ShowController.getById as any);
router.post("/", ShowController.create as any);
router.put("/:id", ShowController.update as any);
router.delete("/:id", ShowController.remove as any);

export default router;
