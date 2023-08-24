import express from "express";
import { BookController } from "./book.controller.js";

const router = express.Router();

router.post("/create-book", BookController.createBook);

router.get("/all-books", BookController.getAllBooks);

router.post("/comment/:id", BookController.createComment);

router.get("/comment/:id", BookController.getComment);

router.get("/:id", BookController.getSingleBook);
router.patch("/:id", BookController.updateBook);
router.delete("/:id", BookController.deleteBook);

export const BookRoutes = router;
