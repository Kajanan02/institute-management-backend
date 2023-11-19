import mongoose from "mongoose";


const careerSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    degreeProgramme: {
        type: String,
        required: true
    },
    availableUniversities: {
        type: String,
        required: true
    },
    medium: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Career = mongoose.model('career', careerSchema);

export default Career;