import { Router } from "express";
import {
  allUserCtrl,
  createUserCtrl,
  deleteUserCtrl,
  findUserByIdCtrl,
  updateUserCtrl,
} from "../controllers/user.controllers.js";
import {
  createUserValidations,
  updateUserValidations,
} from "../validations/validations.js";
import { applyValidations } from "../middlewares/middlewares.validators.js";

const userRoutes = Router();

userRoutes.get("/", allUserCtrl);
userRoutes.post("/", createUserValidations, applyValidations, createUserCtrl);
userRoutes.get("/:id", findUserByIdCtrl);
userRoutes.patch("/:id", updateUserValidations, updateUserCtrl);
userRoutes.delete("/:id", deleteUserCtrl);

export { userRoutes };
