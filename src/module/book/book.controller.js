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

    res.status(404).json({
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

export const BookController = {
  createBook,
};
