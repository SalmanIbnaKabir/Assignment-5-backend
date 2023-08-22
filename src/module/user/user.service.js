import { User } from "./user.model.js";

const signup = async (payload) => {
  const result = await User.create(payload);

  return result;
};
