const mongoose = require("mongoose");
require("dotenv").config();
const MONGOURL = process.env.MONGO_URL;

const dbConnect = () => {
    mongoose.connect(MONGOURL)
    .then(console.log("DB Connected"))
    .catch(e => console.log("DB Error: " + e))
};

module.exports = dbConnect;