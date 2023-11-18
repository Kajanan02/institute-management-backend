import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

const Attendance = mongoose.model('attendance', attendanceSchema);

export default Attendance;
