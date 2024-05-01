const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/database");
const router = require("./router/router");
require('dotenv').config();
const fileUpload = require("express-fileupload");
const { cloudinaryConnect } = require("./config/cloudinary");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(cors());

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

dbConnect();
cloudinaryConnect();

app.use("/api/v1", router);

app.listen(PORT, () => {
    console.log("Backend Up");
});