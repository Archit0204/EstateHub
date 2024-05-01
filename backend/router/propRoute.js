const express = require("express");
const { authMiddleware } = require("../middleware/auth");
const { listProperty, getAllProperties, getFeatures, getProperty } = require("../controllers/property");
const propRouter = express.Router();

propRouter.post("/post", authMiddleware, listProperty);
propRouter.get("/show", getAllProperties);
propRouter.get("/featured", getFeatures);
propRouter.get("/getProp/:id", authMiddleware, getProperty);

module.exports = propRouter;