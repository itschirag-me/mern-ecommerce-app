"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSchema = exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userSchema = joi_1.default.object({
    name: joi_1.default.string()
        .trim()
        .regex(/^[a-zA-Z\s'\-]+$/, "alphabet only")
        .min(2)
        .max(50)
        .required(),
    communication: joi_1.default.object({
        email: joi_1.default.string().email().required(),
        phoneNumber: joi_1.default.string().min(8).max(14).required(),
    }).required(),
    password: joi_1.default.string().min(8).max(10).required(),
    gender: joi_1.default.string().valid("male", "female", "other").required(),
});
exports.filterSchema = joi_1.default.object({
    page: joi_1.default.string(),
    limit: joi_1.default.string(),
    field: joi_1.default.string()
});
