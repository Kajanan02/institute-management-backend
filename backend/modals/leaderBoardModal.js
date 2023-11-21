import mongoose from "mongoose";


const leaderBoardSchema = new mongoose.Schema({
    regNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    instituteName: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    marks: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const LeaderBoard = mongoose.model('LeaderBoard', leaderBoardSchema);

export default LeaderBoard;