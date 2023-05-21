import express from 'express';
const router = express.Router();
import {authUser, getUserProfile, logoutUser, registerUser, updateUserProfile} from '../controllers/userController.js';
import {protect} from "../middleware/authMiddleware.js";

router.route('/auth').post(authUser);
router.route('/register').post(registerUser);
router.route('/logout').post(logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

export default router;