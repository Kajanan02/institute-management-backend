import express from 'express';
import {
    authUser,
    getAllUsers,
    getUserProfile,
    logoutUser,
    registerUser,
    updateUserProfile
} from '../controllers/userController.js';

const router = express.Router();

router.route('/auth').post(authUser);
router.route('/register').post(registerUser);
router.route('/logout').post(logoutUser);
// router.route('/profile').get(getUserProfile);
router.route('/allprofile').get(getAllUsers);
router.route('/:id/profile').get(getUserProfile).put(updateUserProfile);

export default router;