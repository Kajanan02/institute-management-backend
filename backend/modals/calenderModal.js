import mongoose from "mongoose";


const calenderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Calender = mongoose.model('calender', calenderSchema);

export default Calender;