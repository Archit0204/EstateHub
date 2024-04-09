const User = require("../models/User");
const { signupSchema, signinSchema } = require("../utils/validation");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

            const hashedPassword = await bcrypt.hash(password);    

            // create new user
            const user = await User.create({
                email, 
                firstName, 
                lastName,
                password: hashedPassword
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
        const body = req.body;

        const {success} = signinSchema.safeParse(body);

        if (!success) {
            return res.status(411).json({
                success: false,
                message: "Invalid Inputs"
            });
        }
    }
    catch(e) {
        return res.status(200).json({
            success: false,
            message: e.message
        });
    }
}