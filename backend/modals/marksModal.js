import mongoose from "mongoose";


const marksSchema = new mongoose.Schema({
    subject: {
        type: String,
    },
    marks: {
        type: String,
    },
    name: {
        type: String,
    },
    studentId: {
        type: String,
    },
    date: {
        type: Date,
    }
});

const Marks = mongoose.model('marks', marksSchema);

export default Marks;