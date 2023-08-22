import { BookService } from "./book.service.js";

const createBook = async (req, res) => {
  try {
    const { ...bookData } = req.body;

    const result = await BookService.createBook(bookData);
    if (!result) {
      return res.status(404).json({
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
    res.status(500).json({
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
      return res.status(404).json({
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
    res.status(500).json({
      success: false,
      message: "book not Found",
      errorMessage: error.message,
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await BookService.getSingleBook(id);
    if (!result) {
      return res.status(404).json({
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
    res.status(500).json({
      success: false,
      message: "book not Found",
      errorMessage: error.message,
    });
  }
};
const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const result = await BookService.updateBook(id, updateData);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "book  update successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "book not update",
      errorMessage: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await BookService.deleteBook(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "book  delete successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "book not Found",
      errorMessage: error.message,
    });
  }
};

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
