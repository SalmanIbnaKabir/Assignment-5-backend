import express from "express";
import { BookController } from "./book.controller.js";

const router = express.Router();

router.post("/create-book", BookController.createBook);

export const BookRoutes = router;
