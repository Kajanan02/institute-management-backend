import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const saltPw = await bcrypt.genSalt(10);
const parentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    role: {
        type: String,
        default:"4",
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: false,
    },
    email: {
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

parentSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

parentSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


const Parent = mongoose.model('Parent', parentSchema);
export default Parent;