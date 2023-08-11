import express from "express";
import {createFees, getFeesAll} from "../controllers/fessController.js";


const router = express.Router();

router.route('/:instituteId/student/:studentId/fees').post(createFees);
router.route('/:instituteId/fees').get(getFeesAll);

export default router;