"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = exports.FetchUserByEmail = exports.FetchUserById = exports.FetchUsers = void 0;
const http_status_codes_1 = require("http-status-codes");
const UserModel_1 = __importDefault(require("../model/UserModel"));
const bcrypt_1 = require("../utils/bcrypt");
/**
 * Retrieve users based on the provided filter options.
 *
 * @param filter The filter options for fetching users.
 * @returns A promise that resolves to an array of UserDocumentType objects.
 */
function FetchUsers(filter) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield UserModel_1.default.find({})
            .sort({ [filter.field]: filter.sortOrder })
            .limit(filter.limit)
            .skip((filter.pageNumber - 1) * filter.limit).select("-password -__v");
        const totalCount = yield UserModel_1.default.find({}).count();
        return {
            totalCount,
            users,
        };
    });
}
exports.FetchUsers = FetchUsers;
/**
 * Retrieves a user based on the provided email address.
 *
 * @param email The email address of the user to fetch.
 * @returns The user object matching the provided email, or null if not found.
 */
function FetchUserById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return UserModel_1.default.findById(userId);
    });
}
exports.FetchUserById = FetchUserById;
/**
 * Retrieves a user based on the provided email address.
 *
 * @param email The email address of the user to fetch.
 * @returns The user object matching the provided email, or null if not found.
 */
function FetchUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return UserModel_1.default.findOne({ "communication.email": email });
    });
}
exports.FetchUserByEmail = FetchUserByEmail;
/**
 * Creates a new user with the provided payload.
 *
 * @param payload The data for creating the new user
 * @returns A promise that resolves to the created UserDocumentType object
 */
function CreateUser(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield FetchUserByEmail(payload.communication.email);
        if (user) {
            const error = new Error("This email already exists");
            error.statusCode = http_status_codes_1.StatusCodes.CONFLICT;
            throw error;
        }
        const newUser = new UserModel_1.default(payload);
        newUser.password = yield (0, bcrypt_1.hashPassword)(newUser.password);
        return newUser.save();
    });
}
exports.CreateUser = CreateUser;
