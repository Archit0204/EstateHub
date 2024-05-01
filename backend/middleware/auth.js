const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authMiddleware = (req, res, next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ", "") || req.body.token || req.cookies.token;

        if (!token || token === undefined) {
            return res.status(404).json({
                success: false,
                message: "Token not found"
            });
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET);

        if (!payload) {
            return res.status(411).json({
                success: false,
                message: "Invalid Token"
            });
        }

        req.userId = payload.userId;

        next();
    }
    catch(e) {
        return res.status(401).json({
            success: false,
            message: e.message
        });
    }
}