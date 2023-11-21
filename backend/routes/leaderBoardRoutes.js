import express from "express";
import {
    createLeaderBoard,
    deleteLeaderBoard,
    editLeaderBoard,
    getLeaderBoards
} from "../controllers/leaderBoardController.js";

const router = express.Router();

router.route('/leaderBoard').post(createLeaderBoard);
router.route("/getAllLeaderBoards").get(getLeaderBoards);
router.route('/leaderBoard/:id').put(editLeaderBoard);
router.route('/leaderBoard/:id').delete(deleteLeaderBoard);

export default router;