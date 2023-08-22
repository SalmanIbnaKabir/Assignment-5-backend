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
    //   ref: "user",
    //   required: true,
    // }
  },
  {
    timeStamp: true,
  }
);

export const Book = model("Book", bookSchema);
