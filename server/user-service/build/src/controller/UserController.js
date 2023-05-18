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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByEmail = exports.getUserById = exports.postUser = exports.getUsers = void 0;
const UserService_1 = require("../services/UserService");
const http_status_codes_1 = require("http-status-codes");
function getUsers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { page, limit, field, sortOrder } = req.query;
            const filters = {
                pageNumber: page ? parseInt(page) : 1,
                limit: limit ? parseInt(limit) : 10,
                field: field || "createdAt",
                sortOrder: sortOrder === "desc" ? "desc" : "asc",
            };
            const results = yield (0, UserService_1.FetchUsers)(filters);
            res.status(http_status_codes_1.StatusCodes.ACCEPTED).json({
                status: true,
                message: http_status_codes_1.ReasonPhrases.ACCEPTED,
                results: Object.assign(Object.assign({}, filters), results),
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getUsers = getUsers;
function postUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = req.body;
            const result = yield (0, UserService_1.CreateUser)(payload);
            res.status(http_status_codes_1.StatusCodes.CREATED).json({
                status: true,
                message: http_status_codes_1.ReasonPhrases.CREATED,
                result,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.postUser = postUser;
function getUserById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, UserService_1.FetchUserById)(id);
            res.status(http_status_codes_1.StatusCodes.ACCEPTED).json({
                status: true,
                message: http_status_codes_1.ReasonPhrases.ACCEPTED,
                result,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getUserById = getUserById;
function getUserByEmail(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = req.params.id;
            const result = yield (0, UserService_1.FetchUserByEmail)(email);
            res.status(http_status_codes_1.StatusCodes.ACCEPTED).json({
                status: true,
                message: http_status_codes_1.ReasonPhrases.ACCEPTED,
                result,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getUserByEmail = getUserByEmail;
