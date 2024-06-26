import asyncHandler from "express-async-handler";
import Attendance from "../modals/attendanceModal.js";
import Student from "../modals/studentModal.js";

const updateAttendance = asyncHandler(async (req, res) => {
    const studentId = req.params.studentId;
    const instituteId = req.params.instituteId;
    let date= new Date();
    const student = await Student.findById({_id:studentId})

    const attendance = await Attendance.create({studentId,instituteId,date});

    if (attendance) {
        student.lastAttended= date;
        await student.save();
        res.status(201).json(attendance)
    }else {
        res.status(400);
        throw new Error('Invalid user Data')
    }
})

const getAllAttendance = asyncHandler(async (req, res) => {
    const attendance = await Attendance.find({}).sort({ createdAt: -1 });
    if (attendance) {
        res.json(attendance);
    } else {
        res.status(404);
        throw new Error('Attendance not found')
    }
})

export {updateAttendance,getAllAttendance}