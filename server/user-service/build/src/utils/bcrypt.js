"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
function hashPassword(password) {
    return bcrypt_1.default.genSalt(10).then(function (salt) {
        return bcrypt_1.default.hash(password, salt).then(function (hash) {
            return hash;
        });
    });
}
exports.hashPassword = hashPassword;
function comparePassword(hash, password) {
    return bcrypt_1.default.compare(password, hash);
}
exports.comparePassword = comparePassword;
