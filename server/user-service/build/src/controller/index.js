"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNotFound = exports.handleError = void 0;
const http_status_codes_1 = require("http-status-codes");
function handleError(error, req, res, next) {
    const statusCode = error.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    const message = error.message || http_status_codes_1.ReasonPhrases.INTERNAL_SERVER_ERROR;
    const data = (error === null || error === void 0 ? void 0 : error.data) || null;
    res.status(statusCode).json({
        status: false,
        message: message,
        result: data,
    });
}
exports.handleError = handleError;
function handleNotFound(req, res, next) {
    const statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
    const message = http_status_codes_1.ReasonPhrases.NOT_FOUND;
    res.status(statusCode).json({
        status: false,
        message: message,
        result: {
            url: req.url,
            errorMessage: "Method not found",
        },
    });
}
exports.handleNotFound = handleNotFound;
