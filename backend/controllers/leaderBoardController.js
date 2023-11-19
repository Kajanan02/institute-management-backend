import asyncHandler from "express-async-handler";
import LeaderBoard from "../modals/leaderBoardModal.js";
import Career from "../modals/careerModal.js";
import LeaderBoardModal from "../modals/leaderBoardModal.js";

const createLeaderBoard = asyncHandler(async (req, res) => {
    const {regNo, name, instituteName, subject, marks} = req.body;
    const leaderBoard = await LeaderBoard.create({regNo, name, instituteName, subject, marks})
    if (leaderBoard) {
        res.status(201).json(leaderBoard)
    } else {
        res.status(400);
        throw new Error("Invalid user Data")
    }
})

const editLeaderBoard = asyncHandler(async (req,res)=>{
    let _id = req.params.id
    const leaderBoard = await LeaderBoard.findById(_id);
    if (leaderBoard) {
        leaderBoard.regNo = req.body.regNo || leaderBoard.regNo;
        leaderBoard.name = req.body.name || leaderBoard.name;
        leaderBoard.instituteName = req.body.instituteName || leaderBoard.instituteName;
        leaderBoard.subject = req.body.subject || leaderBoard.subject;
        leaderBoard.marks = req.body.marks || leaderBoard.marks;
        const updatedLeaderBoard = await leaderBoard.save();
        res.json(updatedLeaderBoard);
    } else {
        res.status(404);
        throw new Error('User not found')
    }

})

const getLeaderBoards = asyncHandler(async (req, res) => {
    const leaderBoard = await LeaderBoard.find({}).sort({ createdAt: -1 });
    if (leaderBoard) {
        res.json(leaderBoard);
    } else {
        res.status(404);
        throw new Error('Career not found')
    }
})

const deleteLeaderBoard = asyncHandler(async (req, res) => {
    const leaderBoard = await LeaderBoardModal.findById(req.params.id);
    if (leaderBoard) {
        await leaderBoard.deleteOne();
        res.json({message: 'LeaderBoard removed'});
    } else {
        res.status(404);
        throw new Error('LeaderBoard not found')
    }
})

export {createLeaderBoard,editLeaderBoard,getLeaderBoards,deleteLeaderBoard}