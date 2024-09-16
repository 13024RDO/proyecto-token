import { Router } from "express";
import {
  allUserCtrl,
  createUserCtrl,
} from "../controllers/user.controllers.js";

const userRoutes = Router();

userRoutes.get("/", allUserCtrl);
userRoutes.post("/", createUserCtrl);
userRoutes.get("/id:");
userRoutes.patch("/:id");
userRoutes.delete("/:id");

export { userRoutes };
