import { UserService } from "./user.service.js";

const signup = async (req, res) => {
  try {
    const { ...signupData } = req.body;

    const result = await UserService.signup(signupData);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "signup not successful",
      });
    }

    res.status(201).json({
      success: true,
      message: "signup successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user not created",
      errorMessage: error.message,
    });
  }
};

export const UserController = {
  signup,
};
