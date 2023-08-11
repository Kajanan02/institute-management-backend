import asyncHandler from "express-async-handler";
import Student from "../modals/studentModal.js";
import Fees from "../modals/feesModal.js";

const createFees = asyncHandler(async (req, res) => {
    const { feesAmount, date, status, method} = req.body;
    const studentId = req.params.studentId;
    const instituteId = req.params.instituteId;

    console.log(req.body)
    const student = await Student.findById(studentId);
    if (student) {
        const fees = await Fees.create({
            method,
            status,
            feesAmount,
            date,
            studentId:studentId,
            name: student.name,
            instituteId:instituteId
        });
        console.log(fees)

        if (fees) {
            // console.log(mark)
            res.status(201).json({
                _id: fees._id,
                name: fees.name,
                method: fees.method,
                feesAmount: fees.feesAmount,
                date: fees.date,
                instituteId:instituteId,
                status: fees.status,
                studentId: fees.studentId,
            })
        } else {
            res.status(400);
            throw new Error('Invalid user Data')
        }
    } else {
        res.status(400);
        throw new Error('Invalid user Data')
    }
})


const editFees = asyncHandler(async (req, res) => {

})



const getFeesAll = asyncHandler(async (req, res) => {
    const fees = await Fees.find({instituteId: req.params.instituteId});
        if (fees) {
            res.json(fees);
        } else {
            res.status(404);
            throw new Error('Fees not found')
        }
    }
)

export {createFees, getFeesAll};