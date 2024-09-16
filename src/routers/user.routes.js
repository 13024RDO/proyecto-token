import { Router } from "express";
import {
  allUserCtrl,
  createUserCtrl,
  findUserByIdCtrl,
} from "../controllers/user.controllers.js";

const userRoutes = Router();

userRoutes.get("/", allUserCtrl);
userRoutes.post("/", createUserCtrl);
userRoutes.get("/id:", findUserByIdCtrl);
userRoutes.patch("/:id");
userRoutes.delete("/:id");

export { userRoutes };
