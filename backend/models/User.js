const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    profileInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    },
    listedProperties: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property"
    }],
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property"
    }],
})

module.exports = mongoose.model("User", UserSchema);