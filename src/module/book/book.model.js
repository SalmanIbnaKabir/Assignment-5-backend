import mongoose, { Schema, model } from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    reviews: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Book = model("Book", bookSchema);
