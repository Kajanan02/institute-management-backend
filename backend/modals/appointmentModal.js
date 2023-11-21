import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required: true,
    },
    status:{
        type: String,
        default:"REQUESTED",
    },
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    parentName: {
        type: String,
    },
}, {
    timestamps: true,
});

const Appointment = mongoose.model('appointment', appointmentSchema);
export default Appointment;