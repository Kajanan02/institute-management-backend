import asyncHandler from "express-async-handler";
import Calender from "../modals/calenderModal.js";

const createCalenderEvent = asyncHandler(async (req, res) => {
    const { title, start, end} = req.body;

const calender = await Calender.create({title, start, end})
    if(calender){
        res.status(201).json({
            _id: calender._id,
            title: calender.title,
            start: calender.start,
            end: calender.end,
        })
    }else {
        res.status(400);
        throw new Error("Invalid user Data")
    }
})

const getCalenderEvent = asyncHandler(async (req, res) => {
    const calender = await Calender.find({});
    if (calender) {
        res.json(calender);
    } else {
        res.status(404);
        throw new Error('Calender not found')
    }
})

const editCalenderEvent = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const calender = await Calender.findById(_id);
    if (calender) {
        calender.title = req.body.title || calender.title;
        calender.start = req.body.start || calender.start;
        calender.end = req.body.end || calender.end;
        const updatedCalender = await calender.save();
        res.json({
            _id: updatedCalender._id,
            title: updatedCalender.title,
            start: updatedCalender.start,
            end: updatedCalender.end,
        });
    }else {
        res.status(404);
        throw new Error('Calender not found')
    }
})

const deleteCalenderEvent = asyncHandler(async (req, res) => {
    const calender = await Calender.findById(req.params.id);
    if (calender) {
        await calender.deleteOne();
        res.json({ message: 'Calender removed' });
    } else {
        res.status(404);
        throw new Error('Calender not found')
    }
})

export {createCalenderEvent,getCalenderEvent,editCalenderEvent,deleteCalenderEvent}