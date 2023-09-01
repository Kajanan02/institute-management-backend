import express from "express";
import {createParent, deleteParent, getParentProfile, updateParentProfile} from "../controllers/parentController.js";

const router = express.Router();

router.route('/:instituteId/createParent').post(createParent);
router.route('/:instituteId/parent/:id').get(getParentProfile).put(updateParentProfile);
router.route('/:instituteId/parent/:id').delete(deleteParent);

export default router;