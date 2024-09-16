import express from "express";
import { PORT } from "./src/settings/env.js";
import cors from "cors";
import { conn } from "./src/database/connection.js";
import helmet from "helmet";
import morgan from "morgan";
import { userRoutes } from "./src/routers/user.routes.js";

const app = express();

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server on fire in port ${PORT}`);
});
