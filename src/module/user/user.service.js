import { User } from "./user.model.js";
import bcrypt from "bcrypt";

const signup = async (payload) => {
  // console.log("payload", payload);
  // const result = await User.create(
  //   { name: "salman", password: "123456", email: "salman@gamil.com" },

  //   { validateBeforeSave: true }
  // );
  const find = await User.findOne({ email: payload.email });
  if (find) {
    return false;
  }
  const result = await User.create(payload);
  // console.log(result);

  return result;
};

const login = async (payload) => {
  const { email, password } = payload;
  // console.log(email, password);

  const findUser = await User.findOne({ email: email });
  // console.log(findUser);
  if (!findUser) {
    return false;
  }

  const passwordMatch = await bcrypt.compare(password, findUser.password);

  if (!passwordMatch) {
    return false;
  }

  return findUser;
};

export const UserService = {
  signup,
  login,
};
