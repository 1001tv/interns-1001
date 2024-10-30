import { Request, Response } from "express";
import User from "../models/User";

export const logout = async (req: Request, res: Response, next: any) => {
  try {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.status(200).json({ message: "Logged out successfully" });
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};


export const isAuthenticated = (req: Request, res: Response, next: any) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

export const isAdmin = async (req: Request, res: Response, next: any) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });
    const user = await User.findByPk((req.user as any).id);
    if (user?.dataValues.role === "admin") return next();
    return res.status(403).json({ error: "Forbidden" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
