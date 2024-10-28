import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";

export const getById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the user." });
  }
};

export const update = async (req: Request, res: Response) => {
  const { username, password, requiredPackage, role } = req.body;

  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await user.update({
      username: username || user.dataValues.username,
      password: password
        ? await bcrypt.hash(password, 10)
        : user.dataValues.password,
      requiredPackage: requiredPackage || user.dataValues.requiredPackage
    });

    res.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the user." });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await user.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user." });
  }
};
