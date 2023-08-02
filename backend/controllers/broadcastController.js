import asyncHandler from "express-async-handler";
import Student from "../modals/studentModal.js";
import Marks from "../modals/marksModal.js";
import Broadcast from "../modals/broadcastModal.js";

const createBroadcast = asyncHandler(async (req, res) => {
    const {message, messageTopic, sender} = req.body;
    const instituteId = req.params.instituteId
    const broadcast = await Broadcast.create({
        instituteId, message, messageTopic, sender
    })
    if(broadcast){
        res.status(201).json({
            _id: broadcast._id,
            instituteId: broadcast.instituteId,
            message: broadcast.message,
            messageTopic: broadcast.messageTopic,
            sender: broadcast.sender
        })
    }
    else{
        res.status(400);
        throw new Error("Invalid user Data")
    }
})

export {createBroadcast}
