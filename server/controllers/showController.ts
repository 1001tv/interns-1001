import { Response, Request } from "express";
import Show from "../models/Show";

export const getById = async (req: Request, res: Response) => {
  try {
    const show = await Show.findByPk(req.params.id);
    if (!show) return res.status(404).json({ error: "Show not found" });
    return res.status(200).json(show);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const shows = await Show.findAll({
      offset: (page - 1) * 10,
      limit: 10
    });
    const total = await Show.count();
    return res.status(200).json({
      shows: shows,
      total: total,
      next: page < Math.ceil(total / 10),
      page: page
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const show = await Show.create(req.body);
    return res.status(201).json(show);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const show = await Show.findByPk(req.params.id);
    if (!show) return res.status(404).json({ error: "Show not found" });
    await show.update(req.body);
    return res.status(200).json(show);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const show = await Show.findByPk(req.params.id);
    if (!show) return res.status(404).json({ error: "Show not found" });
    await show.destroy();
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
