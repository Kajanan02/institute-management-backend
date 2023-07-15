import express from "express";
import {createMarks, deleteMarks, editMarks, getAllMarks} from "../controllers/marksController.js";


const router = express.Router();

router.route('/:instituteId/createMarks').post(createMarks);
router.route('/:instituteId/getAllMarks').get(getAllMarks);
router.route('/:instituteId/marks/:id').put(editMarks);
router.route('/:instituteId/marks/:id/deleteMarks').delete(deleteMarks);

export default router;