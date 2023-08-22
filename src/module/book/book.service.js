import { Book } from "./book.model.js";

const createBook = async (payload) => {
  const result = await Book.create(payload);

  return result;
};

export const BookService = {
  createBook,
};
