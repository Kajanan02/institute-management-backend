import asyncHandler from "express-async-handler";
import Student from "../modals/studentModal.js";
import generateToken from "../utils/generateToken.js";
import Parent from "../modals/parentModal.js";

//@desc Register a new parent
//route POST/api/parent/register
//@access Public
const createParent = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {
        name,
        studentId,
        password,
        gender,
        address,
        phoneNumber,
        profilePic,
        instituteId,
        email,
        nicNo,
        location} = req.body;


    const parentExists = await Parent.findOne({studentId})
    console.log(parentExists)
    if (parentExists) {
        res.status(400);
        throw new Error('Parent already exits')
    }

    const parent = await Parent.create({
        name,
        studentId,
        password,
        gender,
        address,
        phoneNumber,
        profilePic,
        email,
        instituteId,
        nicNo,
        location
    });

    console.log(parent)

    if (parent) {
        generateToken(res, parent._id)
        res.status(201).json(parent)
    } else {
        res.status(400);
        throw new Error('Invalid user Data')
    }
});

//@desc Get parent profile
//route POST/api/parent/profile
//@access Private

const getParentProfile = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const parent = await Parent.findById(_id)
    if (parent) {
        res.json(parent)
    }else {
        res.status(400);
        throw new Error('Invalid parent Data')
    }
});

const updateParentProfile = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const parent = await Parent.findById(_id)
    if (parent) {
        parent.name = req.body.name || parent.name
        parent.age = req.body.age || parent.age
        parent.dob = req.body.dob || parent.dob
        parent.nicFront = req.body.nicFront || parent.nicFront
        parent.nicBack = req.body.nicBack || parent.nicBack
        parent.email = req.body.email || parent.email
        parent.subjects = req.body.subjects || parent.subjects
        parent.phoneNumber = req.body.phoneNumber || parent.phoneNumber
        parent.address = req.body.address || parent.address
        parent.profilePic = req.body.profilePic || parent.profilePic
        parent.subject = req.body.subject || parent.subject
        parent.gender = req.body.gender || parent.gender
        parent.nicNo = req.body.nicNo || parent.nicNo
        parent.parentName = req.body.parentName || parent.parentName
        parent.instituteId = req.body.instituteId || parent.instituteId
        parent.location = req.body.location || parent.location

        if (req.body.password) {
            parent.password = req.body.password
        }

        console.log(req.body)
        const updatedUser = await parent.save();

        res.json(parent)
    } else {
        res.status(400);
        throw new Error('Parent not found');
    }
});

const deleteParent = asyncHandler(async (req, res) => {

    let _id = req.params.id
    const parent = await Parent.findById(_id)
    if (parent) {
        await parent.deleteOne();
        res.json({message: 'Parent removed'})
    } else {
        res.status(404);
        throw new Error('Parent not found');
    }

});


export {createParent,getParentProfile,updateParentProfile,deleteParent};
