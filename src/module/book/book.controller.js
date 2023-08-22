import { BookService } from "./book.service.js";

const createBook = async (req, res) => {
  try {
    const { ...bookData } = req.body;

    const result = await BookService.createBook(bookData);
    if (!result) {
      res.status(404).json({
        success: false,
        message: "book not created",
      });
    }

    res.status(201).json({
      success: true,
      message: "book  created successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "book not created",
      errorMessage: error.message,
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const result = await BookService.getAllBooks();
    if (!result) {
      res.status(404).json({
        success: false,
        message: "book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "book  get successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "book not Found",
      errorMessage: error.message,
    });
  }
};

export const BookController = {
  createBook,
  getAllBooks,
};
