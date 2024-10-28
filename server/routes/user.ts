import { Router } from "express";
import * as UserController from "../controllers/userController";
import passport from "../config/passport";
import * as AuthController from "../controllers/authController";

const router = Router();

router.get("/:id", UserController.getById as any);
router.put("/:id", UserController.update as any);
router.delete("/:id", UserController.remove as any);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
  }) as any
);
router.post(
  "/logout",
  AuthController.isAuthenticated,
  AuthController.logout as any
);

export default router;
