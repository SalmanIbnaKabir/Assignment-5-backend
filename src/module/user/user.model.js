import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";
import { bcrypt_salt_Rounds } from "../../..";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, bcrypt_salt_Rounds);

  next();
});

export const User = model("User", userSchema);
