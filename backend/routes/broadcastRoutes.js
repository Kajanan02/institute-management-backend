import express from "express";
import {createBroadcast, studentNotification} from "../controllers/broadcastController.js";


const router = express.Router();

router.route('/:instituteId/broadcast').post(createBroadcast);
router.route('/:instituteId/student/:studentId/broadcast').get(studentNotification);


export default router;