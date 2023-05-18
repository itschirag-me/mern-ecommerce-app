"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    communication: {
        email: {
            type: String,
            required: true,
            unique: [true, "email already exists"],
        },
        phoneNumber: {
            type: String,
            required: true,
        },
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
