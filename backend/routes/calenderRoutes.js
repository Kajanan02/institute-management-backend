import express from "express";
import {
    createCalenderEvent,
    deleteCalenderEvent,
    editCalenderEvent,
    getCalenderEvent
} from "../controllers/calenderController.js";


const router = express.Router();

router.route('/:instituteId/calender').post(createCalenderEvent);
router.route('/:instituteId/calender').get(getCalenderEvent);
router.route('/:instituteId/calender/:id').put(editCalenderEvent);
router.route('/:instituteId/calender/:id').delete(deleteCalenderEvent);


export default router;