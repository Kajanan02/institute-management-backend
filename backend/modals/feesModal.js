import mongoose from "mongoose";

const feesSchema = new mongoose.Schema({
    studentId: {
        type: String,
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
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    instituteId: {
        type: String,
        required: true,
    },
    method: {
        type: String,
        required: true,
    }
});

const Fees = mongoose.model('fees', feesSchema);

export default Fees;
