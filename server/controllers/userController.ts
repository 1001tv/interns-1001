import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  const { password, username, requiredPackage, role } = req.body;

  if (!password || !username) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      password: hashedPassword,
      username,
      requiredPackage,
      role,
    });

    const { password: _, ...userWithoutPassword } = user.toJSON();
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const { password, ...userWithoutPassword } = user.toJSON();
    res.json(userWithoutPassword);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the user." });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { username, password, requiredPackage, role } = req.body;

  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }
    user.username = username || user.username;
    user.requiredPackage = requiredPackage || user.requiredPackage;
    user.role = role || user.role;

    await user.save();

    const { password: _, ...userWithoutPassword } = user.toJSON();
    res.json(userWithoutPassword);
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the user." });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
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

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    req.session.userId = user.id;
    const { password: _, ...userWithoutPassword } = user.toJSON();
    res.json(userWithoutPassword);
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "An error occurred while logging in." });
  }
};

export const logoutUser = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error logging out:", err);
      return res.status(500).json({ error: "Could not log out" });
    }
    res.status(204).send();
  });
};
