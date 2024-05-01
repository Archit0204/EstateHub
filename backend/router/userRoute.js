const express = require("express");
const { signup, signin, updateProfile } = require("../controllers/user");
const { authMiddleware } = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.patch("/update", authMiddleware, updateProfile);

module.exports = userRouter;