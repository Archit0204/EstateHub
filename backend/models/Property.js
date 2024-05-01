const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    propertyType: {
        type: String,
        enum: ['Apartment', 'Villa', 'Mansion', 'Penthouse', 'Other'],
        default: "Other",
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    imageUrl: {
        type: String,
    }
})

module.exports = mongoose.model("Property", propertySchema);