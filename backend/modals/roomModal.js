import mongoose from "mongoose";


const roomSchema = new mongoose.Schema({
    room: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Room = mongoose.model('room', roomSchema);

export default Room;