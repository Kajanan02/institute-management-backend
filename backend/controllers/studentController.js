import asyncHandler from "express-async-handler";
import Student from "../modals/studentModal.js";
import generateToken from "../utils/generateToken.js";



//@desc Register a new student
//route POST/api/student/register
//@access Public

const createStudent = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {
        name, age, password, role, phoneNumber, address, profilePic, gender, nicNo, parentName, instituteId, location
    } = req.body;

    const studentExists = await Student.findOne({nicNo})
    if (studentExists) {
        res.status(400);
        throw new Error('Student already exits')
    }

    const student = await Student.create({
        name, age, password, role, phoneNumber, address, profilePic, gender, nicNo, parentName, instituteId, location
    });

    if (student) {
        generateToken(res, student._id)
        res.status(201).json({
            name: student.name,
            age: student.age,
            password: student.password,
            role: student.role,
            phoneNumber: student.phoneNumber,
            address: student.address,
            profilePic: student.profilePic,
            gender: student.gender,
            nicNo: student.nicNo,
            parentName: student.parentName,
            instituteId: student.instituteId,
            location: student.location,
            createdAt: student.createdAt,
        })
    } else {
        res.status(400);
        throw new Error('Invalid user Data')
    }
});

//@desc Get user profile
//route POST/api/users/profile
//@access Private
const getStudentProfile = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const student = await Student.findById(_id)
    if (student) {
        res.json({
            _id: student._id,
            name: student.name,
            age: student.age,
            password: student.password,
            role: student.role,
            phoneNumber: student.phoneNumber,
            address: student.address,
            profilePic: student.profilePic,
            gender: student.gender,
            nicNo: student.nicNo,
            parentName: student.parentName,
            instituteId: student.instituteId,
            location: student.location,
            creationDate: student.creationDate,
        })
    }
});


const updateStudentProfile = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const student = await Student.findById(_id)
    if (student) {
        student.name = req.body.name || student.name
        student.age = req.body.age || student.age
        student.phoneNumber = req.body.phoneNumber || student.phoneNumber
        student.address = req.body.address || student.address
        student.profilePic = req.body.profilePic || student.profilePic
        student.gender = req.body.gender || student.gender
        student.nicNo = req.body.nicNo || student.nicNo
        student.parentName = req.body.parentName || student.parentName
        student.instituteId = req.body.instituteId || student.instituteId
        student.location = req.body.location || student.location

        if (req.body.password) {
            student.password = req.body.password
        }

        console.log(req.body)
        const updatedUser = await student.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            age: updatedUser.age,
            role: updatedUser.role,
            phoneNumber: updatedUser.phoneNumber,
            address: updatedUser.address,
            profilePic: updatedUser.profilePic,
            gender: updatedUser.gender,
            nicNo: updatedUser.nicNo,
            parentName: updatedUser.parentName,
            instituteId: updatedUser.instituteId,
            location: updatedUser.location,
            createdAt: updatedUser.createdAt,
        })
    }
    else {
        res.status(404);
        throw new Error('User not found');
    }
});

const deleteStudent = asyncHandler(async (req, res) => {

    let _id = req.params.id
    const student = await Student.findById(_id)
    if (student) {
        await student.deleteOne();
        res.json({message: 'Student removed'})
    }else {
        res.status(404);
        throw new Error('Student not found');
    }

});


const getAllStudents = asyncHandler(async (req, res) => {

    try {
        const students = await Student.find({});
        res.json(students);
    } catch (err) {
        console.error('Failed to fetch users from MongoDB:', err);
        res.status(500).send('Failed to fetch users from MongoDB');
    }
});

export {createStudent, getStudentProfile,updateStudentProfile,deleteStudent,getAllStudents};