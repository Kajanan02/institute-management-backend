import mongoose from "mongoose";

const feesSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Student',
        required: true,
    },
    feesAmount: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    studentNIC: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    paySlip: {
        type: String,
    },
    method: {
        type: String,
        required: true,
    }
});

const Fees = mongoose.model('fees', feesSchema);

export default Fees;
