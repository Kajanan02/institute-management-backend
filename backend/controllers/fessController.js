import asyncHandler from "express-async-handler";
import Student from "../modals/studentModal.js";
import Fees from "../modals/feesModal.js";

const createFees = asyncHandler(async (req, res) => {
    const {feesAmount, name, status, paymentSlip, method, studentNicNo,month} = req.body;
    const studentId = req.params.studentId;
    const instituteId = req.params.instituteId;

    const student = await Student.findById(studentId);
    if (student) {
        const fees = await Fees.create({feesAmount, name, status, paymentSlip, method, studentNicNo, studentId, instituteId,month});
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


const editFees = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const fees = await Fees.findById(_id);
    if (fees) {
        fees.feesAmount = req.body.feesAmount || fees.feesAmount;
        fees.name = req.body.name || fees.name;
        fees.status = req.body.status || fees.status;
        fees.paymentSlip = req.body.paymentSlip || fees.paymentSlip;
        fees.method = req.body.method || fees.method;
        fees.studentNicNo = req.body.studentNicNo || fees.studentNicNo;
        fees.month = req.body.month || fees.month;
        const updatedFees = await fees.save();
        res.json(updatedFees);
    } else {
        res.status(404);
        throw new Error('Fees not found')
    }
})

export {createFees, getFeesAll,editFees};