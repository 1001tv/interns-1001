import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({
  path: `${__dirname}/../.env`,
});

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
});

export default sequelize;
