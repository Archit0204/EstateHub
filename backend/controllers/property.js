const Property = require("../models/Property");
const User = require("../models/User");
const { uploadFileToCloudinary, isFileTypeSupported } = require("../utils/uploadToCloudinary");
const { propertySchema } = require("../utils/validation");

exports.listProperty = async(req, res) => {
    try{
        const body = req.body;
        console.log(body);
        const file = req.files.imageFile;
        console.log(file);

        const fileType = file.name.split('.').at(-1).toLowerCase();

        if (!isFileTypeSupported(fileType)) {
            return res.status(411).json({
                success: false,
                message: "File Type Not Supported"
            });
        }

        const response = await uploadFileToCloudinary(file, "EstateHub");

        body.imageUrl = response.secure_url;

        // const {success} = propertySchema.safeParse(body);

        // if (!success) {
        //     return res.status(411).json({
        //         success: false,
        //         message: "Invalid Inputs"
        //     });
        // }

        const userId = req.userId;
        const listing = await Property.create(body);

        await User.findByIdAndUpdate(userId, {
            $push: {
                listedProperties: listing
            }
        });

        return res.status(200).json({
            success: true,
            message: "property Listed Successfully"
        });
    }
    catch(e) {
        return res.status(500).json({
            success: false,
            message: e.message
        });
    }
}

exports.getAllProperties = async(req, res) => {
    try{

        const properties = await Property.find({});

        return res.status(200).json({
            success: true,
            message: "Properties Fetched Successfully",
            properties
        });
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

exports.getFeatures = async(req, res) => {
    try{

        const featuredProperties = await Property.find({
            featured: true
        });

        return res.status(200).json({
            success: true,
            message: "Properties Fetched Successfully",
            featuredProperties
        });
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

exports.getProperty = async(req, res) => {

    try{

        const {id} = req.params;

        const property = await Property.findById(id);
        
        return res.status(200).json({
            success: true,
            property
        });
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
}