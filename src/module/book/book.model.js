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
    // owner:{
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // }
  },
  {
    timestamps: true,
  }
);

export const Book = model("Book", bookSchema);
