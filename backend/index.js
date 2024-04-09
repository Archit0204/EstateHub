const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/database");
const router = require("./router/router");
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

dbConnect();

app.use(cors());
app.use(express.json());

app.use("/api/vi/", router);

app.listen(PORT, () => {
    console.log("Backend Up");
});