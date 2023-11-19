import express from "express";
import {
    createStudent,
    deleteStudent, getAllInstituteStudents,
    getAllStudents,
    getStudentProfile,
    updateStudentProfile
} from "../controllers/studentController.js";

const router = express.Router();

router.route('/:instituteId/createStudent').post(createStudent);
router.route('/:instituteId/student/:id').get(getStudentProfile).put(updateStudentProfile);
router.route('/:instituteId/student/:id').delete(deleteStudent);
router.route('/:instituteId/getAllStudents').get(getAllStudents);
router.route('/students').get(getAllInstituteStudents);

export default router;