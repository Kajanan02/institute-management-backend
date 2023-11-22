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
    status: {
        default:"REQUESTED",
        type: String,
        required: true,
    },
    instituteId: {
        type: String,
        required: true,
    },
    paymentSlip: {
        type: String,
    },
    method: {
        type: String,
        required: true,
    },
    studentNicNo: {
        type: String,
        required: true,
    },
    month: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
});

const Fees = mongoose.model('fees', feesSchema);

export default Fees;
