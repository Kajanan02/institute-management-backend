import asyncHandler from "express-async-handler";
import Career from "../modals/careerModal.js";

const createCareer = asyncHandler(async (req, res) => {
    const {course, degreeProgramme, availableUniversities, medium, duration, description} = req.body;
    const career = await Career.create({course, degreeProgramme, availableUniversities, medium, duration, description})
    if (career) {
        res.status(201).json(career)
    } else {
        res.status(400);
        throw new Error("Invalid user Data")
    }
})

const getCareers = asyncHandler(async (req, res) => {
    const career = await Career.find({}).sort({ createdAt: -1 });
    if (career) {
        res.json(career);
    } else {
        res.status(404);
        throw new Error('Career not found')
    }
})

const editCareer = asyncHandler(async (req, res) => {
let _id = req.params.id
    const career = await Career.findById(_id);
    if (career) {
        career.course = req.body.course || career.course;
        career.degreeProgramme = req.body.degreeProgramme || career.degreeProgramme;
        career.availableUniversities = req.body.availableUniversities || career.availableUniversities;
        career.medium = req.body.medium || career.medium;
        career.duration = req.body.duration || career.duration;
        career.description = req.body.description || career.description;
        const updatedCareer = await career.save();
        res.json(updatedCareer);
    } else {
        res.status(404);
        throw new Error('Career not found')
    }
})

const deleteCareer = asyncHandler(async (req, res) => {
    const career = await Career.findById(req.params.id);
    if (career) {
        await career.deleteOne();
        res.json({message: 'Career removed'});
    } else {
        res.status(404);
        throw new Error('Career not found')
    }
})

export {createCareer, getCareers, editCareer, deleteCareer}