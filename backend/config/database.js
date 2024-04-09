const mongoose = require("mongoose");
const MONGOURL = process.env.MONGO_URL;

const dbConnect = () => {
    mongoose.connect(MONGOURL)
    .then(console.log("DB Connected"))
    .catch(e => console.log("DB Error"))
};

module.exports = dbConnect;