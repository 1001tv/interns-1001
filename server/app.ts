import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import sequelize from "./config/sequelize";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).send("Internal Server Error");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  sequelize
    .authenticate()
    .then(async () => {
      console.log("Connection has been established successfully.");
    })
    .catch((err: any) => {
      console.error("Unable to connect to the database:", err);
    });

  console.log(`Server is running on port ${PORT}`);
});
