import express from "express";
import { UserController } from "./user.controller.js";

const router = express.Router();

router.post("/signup", UserController.signup);

export const UserRoutes = router;
