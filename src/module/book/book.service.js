import { Book } from "./book.model.js";

const createBook = async (payload) => {
  // console.log(payload);
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
const updateBook = async (id, payload) => {
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};
const deleteBook = async (id) => {
  const result = await Book.findByIdAndDelete({ _id: id });

  return result;
};
const createComment = async (id, payload) => {
  const result = await Book.findOneAndUpdate(
    { _id: id },
    { $push: { reviews: payload } },
    {
      new: true,
    }
  );

  return result;
};
const getComment = async (id) => {
  const result = await Book.findOne({ _id: id }, { _id: 0, reviews: 1 });

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  deleteBook,
  updateBook,
  createComment,
  getComment,
};
