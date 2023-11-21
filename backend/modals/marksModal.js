import mongoose from "mongoose";


const marksSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    marks: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    nicNo: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
},{
    timestamps: true,
});

const Marks = mongoose.model('marks', marksSchema);

export default Marks;