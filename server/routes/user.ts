import { Router } from "express";
import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
} from "../controllers/userController";

const router = Router();

router.post("/", createUser as any);
router.get("/:id", getUserById as any);
router.put("/:id", updateUser as any);
router.delete("/:id", deleteUser as any);
router.post("/login", loginUser as any);
router.post("/logout", logoutUser);

export default router;
