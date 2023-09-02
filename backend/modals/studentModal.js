import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default:"3",
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    profilePic: {
        type: String,
        required: false,
    },
    nicFront: {
        type: String,
        required: false,
    },
    nicBack: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    subjects: {
        type: [String],
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    parentName: {
        type: String,
        required: false,
    },
    parentId: {
        type: String,
        required: false,
    },
    instituteId: {
        type: String,
        required: false,
    },
    nicNo: {
        type: String,
        required: false,
    },
    location: {
        type: Object,
        required: false,
    }
}, {
    timestamps: true,
});

studentSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

studentSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


const Student = mongoose.model('Student', studentSchema);
export default Student;