import asyncHandler from "express-async-handler";
import Appointment from "../modals/appointmentModal.js";
import Student from "../modals/studentModal.js";

const createAppointment = asyncHandler(async (req, res) => {
    const {topic, date, time, description,  status,parentName} = req.body;
    const instituteId = req.params.instituteId
    const studentId = req.params.studentId
    const appointment = await Appointment.create({
        instituteId, topic, date, time, description, studentId, status,parentName
    })

    if(appointment) {
        res.status(201).json(appointment)
    }else {
        res.status(400);
        throw new Error('Invalid user Data')
    }
})


const updateAppointment = asyncHandler(async (req, res) => {
let appointment = await Appointment.findById(req.params.id)
    if(appointment){
        appointment.topic = req.body.topic || appointment.topic
        appointment.date = req.body.date || appointment.date
        appointment.time = req.body.time || appointment.time
        appointment.description = req.body.description || appointment.description
        appointment.status = req.body.status || appointment.status

        const updatedAppointment = await appointment.save()
        res.json(updatedAppointment)
    }else{
        res.status(400)
        throw new Error('Appointment not found')
    }
})

const getAllAppointments = asyncHandler(async (req, res) => {
    try {
        const appointments = await Appointment.find({}).sort({ createdAt: -1 }).populate("studentId");
        res.json(appointments);
    } catch (err) {
        console.error('Failed to fetch users from MongoDB:', err);
        res.status(500).send('Failed to fetch users from MongoDB');
    }
})

export {createAppointment,updateAppointment,getAllAppointments}