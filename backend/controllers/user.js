const User = require("../models/User");
const { signupSchema, signinSchema, profileSchema } = require("../utils/validation");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Profile = require("../models/Profile");
require("dotenv").config();
const mongoose = require("mongoose");

exports.signup = async(req, res) => {
    try{
        // validate inputs
        const {success} = signupSchema.safeParse(req.body);

        // check the inputs
        if (!success) {
            return res.status(411).json({
                success: false,
                message: "Invalid Inputs"
            });
        }

        // fetch data
        const {email, firstName, lastName, password, confirmPassword} = req.body;

        // check if the user exists
        const existingUser = await User.findOne({
            email
        });

        if (existingUser) {
            return res.status(411).json({
                success: false,
                message: "User already exists"
            });
        }

        // check password
        if (password === confirmPassword) {

            const hashedPassword = await bcrypt.hash(password, 10);    
            
            const profile = await Profile.create({});

            // create new user
            const user = await User.create({
                email, 
                firstName, 
                lastName,
                password: hashedPassword,
                profileInfo: profile._id
            });


            // create token
            const token = jwt.sign({
                userId: user._id
            }, process.env.JWT_SECRET);

            return res.status(200).json({
                success: true,
                message: "User Created Successfully",
                token: token
            });
        }

        return res.status(411).json({
            success: false,
            message: "Password does not match!"
        })
    }
    catch(e) {
        return res.status(200).json({
            success: false,
            message: e.message
        });
    }
}

exports.signin = async(req, res) => {
    try{
        // validate inputs
        const {success} = signinSchema.safeParse(req.body);

        if (!success) {
            return res.status(411).json({
                success: false,
                message: "Invalid Inputs"
            });
        }

        const {email, password} = req.body;

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Input correct username/password"
            });
        }

        const valid = await bcrypt.compare(password, user.password);

        if(!valid){
            return res.status(411).json({
                success: false,
                message: "Input correct username/password"
            });
        }

        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET);

        return res.status(200).json({
            success: true,
            message: "Signed In successfully",
            token
        });
    }
    catch(e) {
        return res.status(200).json({
            success: false,
            message: e.message
        });
    }
}

exports.updateProfile = async(req, res)=>{
    try{
        const body = req.body;
        const {success} = profileSchema.safeParse(body);

        if (!success) {
            return res.status(400).json({
                success: false,
                message: "Invalid data format"
            });
        }

        const userId = req.userId;
        console.log(userId);

        await User.findByIdAndUpdate(userId, {
            $set: {
                profileInfo: {...body}
            }
        }, {
            new: true,
            runValidators: true
        }).exec();

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully"
        });
    }
    catch(e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
}