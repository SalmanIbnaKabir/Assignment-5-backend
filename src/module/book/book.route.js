import express from "express";
import { BookController } from "./book.controller.js";

const router = express.Router();

router.post("/create-book", BookController.createBook);

router.get("/all-books", BookController.getAllBooks);

router.get("/:id", BookController.getSingleBook);

// router.patch("/:id", BookController.updateBook);

export const BookRoutes = router;
