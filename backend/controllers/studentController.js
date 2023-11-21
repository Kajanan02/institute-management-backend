import asyncHandler from "express-async-handler";
import Student from "../modals/studentModal.js";
import generateToken from "../utils/generateToken.js";


//@desc Register a new student
//route POST/api/student/register
//@access Public

const createStudent = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {
        name, dob, password, nicFront,
        nicBack,
        email,
        subjects, role, phoneNumber, address, profilePic, gender, nicNo, parentName, location
    } = req.body;
    const instituteId = req.params.instituteId;
    const studentExists = await Student.findOne({nicNo})
    if (studentExists) {
        res.status(400);
        throw new Error('Student already exits')
    }

    const student = await Student.create({
        name, dob, password, nicFront,
        nicBack,
        email,
        subjects, role, phoneNumber, address, profilePic, gender, nicNo, parentName, instituteId, location
    });

    if (student) {
        generateToken(res, student._id)
        res.status(201).json({
            _id: student._id,
            name: student.name,
            dob: student.dob,
            nicFront: student.nicFront,
            nicBack: student.nicBack,
            email: student.email,
            subjects: student.subjects,
            role: student.role,
            phoneNumber: student.phoneNumber,
            address: student.address,
            profilePic: student.profilePic,
            gender: student.gender,
            nicNo: student.nicNo,
            parentName: student.parentName,
            instituteId: student.instituteId,
            subject: student.subject,
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
    const student = await Student.findById(_id).select('-password').populate("parentId")
    if (student) {
        res.json(student)
    }
});


const updateStudentProfile = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const student = await Student.findById(_id)
    if (student) {
        student.name = req.body.name || student.name
        student.age = req.body.age || student.age
        student.dob = req.body.dob || student.dob
        student.nicFront = req.body.nicFront || student.nicFront
        student.nicBack = req.body.nicBack || student.nicBack
        student.email = req.body.email || student.email
        student.subjects = req.body.subjects || student.subjects
        student.phoneNumber = req.body.phoneNumber || student.phoneNumber
        student.address = req.body.address || student.address
        student.profilePic = req.body.profilePic || student.profilePic
        student.subject = req.body.subject || student.subject
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
            dob: updatedUser.dob,
            nicFront: updatedUser.nicFront,
            nicBack: updatedUser.nicBack,
            email: updatedUser.email,
            subjects: updatedUser.subjects,
            address: updatedUser.address,
            profilePic: updatedUser.profilePic,
            subject: updatedUser.subject,
            gender: updatedUser.gender,
            nicNo: updatedUser.nicNo,
            parentName: updatedUser.parentName,
            instituteId: updatedUser.instituteId,
            location: updatedUser.location,
            createdAt: updatedUser.createdAt,
        })
    } else {
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
    } else {
        res.status(404);
        throw new Error('Student not found');
    }

});


const getAllStudents = asyncHandler(async (req, res) => {

        try {
            const students = await Student.find({instituteId: req.params.instituteId}).sort({ createdAt: -1 }).select('-password').populate("instituteId", "name")
            res.json(students);
        } catch (err) {
            console.error('Failed to fetch users from MongoDB:', err);
            res.status(500).send('Failed to fetch users from MongoDB');
        }
});

const getAllInstituteStudents = asyncHandler(async (req, res) => {

    try {
        const students = await Student.find({}).sort({ createdAt: -1 }).select('-password').populate("instituteId", "name")
        res.json(students);
    } catch (err) {
        console.error('Failed to fetch users from MongoDB:', err);
        res.status(500).send('Failed to fetch users from MongoDB');
    }
});

export {createStudent, getStudentProfile, updateStudentProfile, deleteStudent, getAllStudents,getAllInstituteStudents};