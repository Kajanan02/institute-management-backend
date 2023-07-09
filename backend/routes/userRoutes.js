import express from 'express';
import {
    authUser, deleteUser,
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
router.route('/:id/deleteUser').delete(deleteUser);
export default router;