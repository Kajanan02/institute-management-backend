import express from "express";
import {
    createMarks,
    createMultipleMarks,
    deleteMarks,
    editMarks,
    getAllMarks,
    getMarksByStudent
} from "../controllers/marksController.js";


const router = express.Router();

router.route('/:instituteId/createMarks').post(createMarks);
router.route("/:instituteId/createMarksList").post(createMultipleMarks);
router.route('/:instituteId/getAllMarks').get(getAllMarks);
router.route('/:instituteId/student/:id/marks').get(getMarksByStudent);
router.route('/:instituteId/marks/:id').put(editMarks);
router.route('/:instituteId/marks/:id/deleteMarks').delete(deleteMarks);

export default router;