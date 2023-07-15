import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const   studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
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
    gender: {
        type: String,
        required: false,
    },
    parentName: {
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