import mongoose from "mongoose";


const broadcastSchema = new mongoose.Schema({
    instituteId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    messageTopic: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

const Broadcast = mongoose.model('broadcast', broadcastSchema);

export default Broadcast;