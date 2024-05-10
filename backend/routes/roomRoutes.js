import express from "express";
import {addRoom, getRooms} from "../controllers/roomController.js";

const router = express.Router();

router.route('/createRoom').post(addRoom);
router.route('/roomList').post(getRooms);

export default router;