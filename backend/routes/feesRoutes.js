import express from "express";
import {createFees, editFees, getFeesAll} from "../controllers/fessController.js";


const router = express.Router();

router.route('/:instituteId/student/:studentId/fees').post(createFees);
router.route('/:instituteId/student/:studentId/fees/:feesId/:status').put(editFees);
router.route('/:instituteId/fees').get(getFeesAll);

export default router;