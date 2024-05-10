import asyncHandler from "express-async-handler";
import Room from "../modals/roomModal.js";

const addRoom = asyncHandler(async (req, res) => {
    const {room} = req.body;
    const roomData = await Room.create({
        room
    });
    if (roomData) {
        res.status(201).json(roomData)
    } else {
        res.status(400);
        throw new Error('Invalid Data')
    }
})

const getRooms = asyncHandler(async (req, res) => {
    const rooms = await Room.find({});
    if (rooms) {
        res.status(201).json(rooms)
    } else {
        res.status(400);
        throw new Error('Invalid Data')
    }
})


export {addRoom, getRooms}