import Marks from "../modals/marksModal.js";
import asyncHandler from "express-async-handler";
import Student from "../modals/studentModal.js";



const createMarks = asyncHandler(async (req, res) => {
    const {subject, marks, studentId} = req.body;

    console.log(req.body)
    const student = await Student.findById(studentId);
    if (student) {
        const mark = await Marks.create({
            subject,
            marks,
            studentId,
            name:student.name
        });
        // console.log(student)

        if (mark) {
            // console.log(mark)
            res.status(201).json({
                _id: mark._id,
                name: mark.name,
               subject:mark.subject,
                marks:mark.marks,
                studentId:mark.studentId,
            })
        }else {
            res.status(400);
            throw new Error('Invalid user Data')
        }
    } else {
        res.status(400);
        throw new Error('Invalid user Data')
    }
})

const editMarks = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const marks = await Marks.findById(_id);
    if (marks) {
        marks.subject = req.body.subject || marks.subject;
        marks.marks = req.body.marks || marks.marks;
        marks.studentId = req.body.studentId || marks.studentId;
        if (req.body.studentId) {
            const student = await Student.findById(req.body.studentId);
            marks.name = student.name;
        }
        const updatedMarks = await marks.save();
        res.json({
            _id: updatedMarks._id,
            name: updatedMarks.name,
            subject: updatedMarks.subject,
            marks: updatedMarks.marks,
            studentId: updatedMarks.studentId,
        });
    } else {
        res.status(404);
        throw new Error('Marks not found');
    }
});


const getAllMarks = asyncHandler(async (req, res) => {
    try {
        const marks = await Marks.find({});
        res.json(marks);
    } catch (err) {
        console.error('Failed to fetch users from MongoDB:', err);
        res.status(500).send('Failed to fetch users from MongoDB');
    }
});

const deleteMarks = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const marks = await Marks.findById(_id)
    if (marks) {
        await marks.deleteOne();
        res.json({message: 'Marks removed'})
    }else {
        res.status(404);
        throw new Error('Marks not found');
    }
})

export {createMarks, getAllMarks,editMarks,deleteMarks};


