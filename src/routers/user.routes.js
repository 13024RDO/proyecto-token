import { Router } from "express";
import {
  allUserCtrl,
  createUserCtrl,
  deleteUserCtrl,
  findUserByIdCtrl,
  updateUserCtrl,
} from "../controllers/user.controllers.js";

const userRoutes = Router();

userRoutes.get("/", allUserCtrl);
userRoutes.post("/", createUserCtrl);
userRoutes.get("/:id", findUserByIdCtrl);
userRoutes.patch("/:id", updateUserCtrl);
userRoutes.delete("/:id", deleteUserCtrl);

export { userRoutes };
