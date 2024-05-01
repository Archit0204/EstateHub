const express = require("express");
const propRouter = require("./propRoute");
const userRouter = require("./userRoute");
const router = express.Router();

router.use("/auth", userRouter);
router.use("/listings", propRouter);

module.exports = router;