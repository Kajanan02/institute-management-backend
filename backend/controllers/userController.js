import asyncHandler from 'express-async-handler';
import generateToken from "../utils/generateToken.js";
import User from "../modals/userModal.js";

//@desc Auth user / setToken
//route POST/api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body;
    const user = await User.findOne({email})
    if (user && (await user.matchPassword(password))) {
       let token = generateToken(res, user._id)
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token:token
        })
    }

    res.status(401).json({message: 'Email or password is incorrect'});
});

//@desc Register a new user
//route POST/api/users/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body);

    const {
        name, email, password, phoneNumber,
        address,
        profilePic,role
    } = req.body;
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400);
        throw new Error('User already exits')
    }

    const user = await User.create({
        name, email, password, phoneNumber, address, profilePic,role
    });

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            phoneNumber: user.phoneNumber,
            address: user.address,
            profilePic: user.profilePic,
            creationDate: user.creationDate,
        })
    } else {
        res.status(400);
        throw new Error('Invalid user Data')
    }
});

//@desc Logout user
//route POST/api/users/logout
//@access Public

const logoutUser = asyncHandler(async (req, res) => {

    res.cookie('jwt', null, {
        httpOnly: true,
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
    let _id = req.params.id
    const user = await User.findById(_id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            address: user.address,
            profilePic: user.profilePic,
            creationDate: user.creationDate,
        })
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});
const getAllUsers = asyncHandler(async (req, res) => {

    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        console.error('Failed to fetch users from MongoDB:', err);
        res.status(500).send('Failed to fetch users from MongoDB');
    }
});

//@desc Update user profile
//route POST/api/users/profile
//@access Private

const updateUserProfile = asyncHandler(async (req, res) => {
    console.log(req.params.id)
    let _id = req.params.id
    const user = await User.findById(_id)
    if (user) {
        console.log(user)
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
        user.address = req.body.address || user.address;
        user.profilePic = req.body.profilePic || user.profilePic;

        if (req.body.password) {
            user.password = req.body.password;
        }

        console.log(req.body)

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            phoneNumber: updatedUser.phoneNumber,
            address: updatedUser.address,
            profilePic: updatedUser.profilePic,
            creationDate: user.creationDate,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const user = await User.findById(_id);
    console.log(user)
    if (user) {
        await user.deleteOne();
        res.json({message: 'User removed'});
    } else {
        res.status(404);
        throw new Error('User not found');
    }

})


export {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getAllUsers,deleteUser};