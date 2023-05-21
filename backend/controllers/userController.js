import asyncHandler from 'express-async-handler';
import generateToken from "../utils/generateToken.js";
import User from "../modals/userModal.js";

//@desc Auth user / setToken
//route POST/api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {

const {email,password} = req.body;
    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        generateToken(res,user._id)
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            // token:generateToken(userExists._id)
        })
    }

    res.status(200).json({message: 'Email or password is incorrect'});
});

//@desc Register a new user
//route POST/api/users/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body);

    const {name,email,password} = req.body;
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400);
        throw new Error('User already exits')
    }

    const user =await User.create({
        name,email,password
    });

    if(user){
        generateToken(res,user._id)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
        })
    }else {
        res.status(400);
        throw new Error('Invalid user Data')
    }

});

//@desc Logout user
//route POST/api/users/logout
//@access Public

const logoutUser = asyncHandler(async (req, res) => {

    res.cookie('jwt',null,{
        httpOnly:true,
        expires: new Date(0),
        // secure: true,
        // sameSite:'strict',
    })

    res.status(200).json({message: 'Logout User'});
});

//@desc Get user profile
//route POST/api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
    // console.log(User)
    res.status(200).json({message: 'User Profile'});
});

//@desc Update user profile
//route POST/api/users/profile
//@access Private

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'User Profile updated'});
});


export {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile};