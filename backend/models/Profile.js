const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    contact: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        default: "Male"
    },
    address: {
        type: String,
        trim: true
    },
    DoB: {
        type: String,
    }
})

module.exports = mongoose.model("Profile", profileSchema);