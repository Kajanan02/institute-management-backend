import express from "express";
import {createBroadcast} from "../controllers/broadcastController.js";


const router = express.Router();

router.route('/:instituteId/broadcast').post(createBroadcast);


export default router;