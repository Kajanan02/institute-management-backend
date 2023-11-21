import express from "express";
import {createCareer, deleteCareer, editCareer, getCareers} from "../controllers/careerController.js";


const router = express.Router();

router.route('/career').post(createCareer);
router.route("/getAllCareers").get(getCareers);
router.route('/career/:id').put(editCareer);
router.route('/career/:id').delete(deleteCareer);

export default router;