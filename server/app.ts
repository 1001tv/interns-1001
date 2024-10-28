import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import session from "express-session"; // Import express-session
import sequelize from "./config/sequelize";
import userRoutes from "./routes/user";
import User from "./models/User";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "1001",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use("/api/users", userRoutes);

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

      await User.sync();

      console.log("User table has been created or already exists.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });

  console.log(`Server is running on port ${PORT}`);
});
