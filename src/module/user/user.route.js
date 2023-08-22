import express from "express";

const router = express.Router();

router.post("/signup", UserController.signup);

export const UserRoutes = router;
