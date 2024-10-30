import { Router } from "express";
import * as UserController from "../controllers/userController";
import passport from "../config/passport";
import * as AuthController from "../controllers/authController";

const router = Router();

router.get("/:id", UserController.getById as any);
router.put("/:id", UserController.update as any);
router.delete("/:id", UserController.remove as any);

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err: Error | null, user: any, info: any) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ error: "Login failed" });
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

router.post("/logout", AuthController.isAuthenticated, AuthController.logout as any);

export default router;
