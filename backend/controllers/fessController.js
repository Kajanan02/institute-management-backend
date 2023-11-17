import asyncHandler from "express-async-handler";
import Student from "../modals/studentModal.js";
import Fees from "../modals/feesModal.js";

const createFees = asyncHandler(async (req, res) => {
    const {feesAmount, date, status, method,paySlip} = req.body;
    const studentId = req.params.studentId;
    const instituteId = req.params.instituteId;

    const student = await Student.findById(studentId);
    if (student) {
        const fees = await Fees.create({
            method,
            status,
            feesAmount,
            date,
            studentId: studentId,
            name: student.name,
            studentNIC: student.nicNo,
            instituteId: instituteId
        });
        console.log(fees)

        if (fees) {
            // console.log(mark)
            res.status(201).json(fees)
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
    let _id = req.params.feesId
    let status = req.params.status
    const fees = await Fees.findById(_id);

    if(fees){
        fees.status = status
        const updatedFees = await fees.save()
        res.json(updatedFees)
    } else {
        res.status(404);
        throw new Error('Fees not found');
    }

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

export {createFees, getFeesAll,editFees};