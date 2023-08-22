import { Book } from "./book.model.js";

const createBook = async (payload) => {
  const result = await Book.create(payload);

  return result;
};

const getAllBooks = async () => {
  const result = await Book.find();

  return result;
};
const getSingleBook = async (id) => {
  const result = await Book.findById(id);

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
};
