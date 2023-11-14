import express from "express";
import {createAppointment, getAllAppointments, updateAppointment} from "../controllers/appointmentController.js";

const router = express.Router();

router.route('/:instituteId/student/:studentId/appointment').post(createAppointment);
router.route('/:instituteId/student/:studentId/appointment/:id').put(updateAppointment);
router.route('/:instituteId/getAllAppointments').get(getAllAppointments);


export default router;