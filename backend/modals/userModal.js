import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
       default:"2",
    },
    subject: {
        type: [String],
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
    creationDate: {
        type: Date,
        default: () => Date.now(),
    }
}, {
    timestamps: true,
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


const User = mongoose.model('User', userSchema);
export default User;