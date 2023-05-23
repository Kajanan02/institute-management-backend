import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../modals/userModal.js";

const protect = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt;
    console.log(token);
    // console.log(token);
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded);
            req.user = await User.findById(decoded.userId).select("-password");
            next();

        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, invalid token");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

export {protect};