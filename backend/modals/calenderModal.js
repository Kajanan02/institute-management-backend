import mongoose from "mongoose";


const calenderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    color: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
});

const Calender = mongoose.model('calender', calenderSchema);

export default Calender;