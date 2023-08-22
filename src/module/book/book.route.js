import express from "express";
import { BookController } from "./book.controller.js";

const router = express.Router();

router.get("/:id", BookController.getSingleBook);
router.patch("/:id", BookController.updateBook);

router.post("/create-book", BookController.createBook);

router.get("/all-books", BookController.getAllBooks);

export const BookRoutes = router;
