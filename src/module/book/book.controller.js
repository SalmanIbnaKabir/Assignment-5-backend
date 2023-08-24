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

    // console.log(id), console.log(updateBook);

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

const createComment = async (req, res) => {
  try {
    const id = req.params.id;
    const comment = req.body.comment;

    // console.log(id), console.log(comment);

    const result = await BookService.createComment(id, comment);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "comment  add successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "comment not add",
      errorMessage: error.message,
    });
  }
};
const getComment = async (req, res) => {
  try {
    const id = req.params.id;

    // console.log(id), console.log(comment);

    const result = await BookService.getComment(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "comment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "comment  get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "comment not get successfully",
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
  createComment,
  getComment,
};
