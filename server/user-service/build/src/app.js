"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Env_1 = __importDefault(require("./config/Env"));
const apiRouter_1 = __importDefault(require("./routes/apiRouter"));
const controller_1 = require("./controller");
const app = (0, express_1.default)();
const corsOrigin = {
    origin: Env_1.default.API_GATEWAY,
};
app
    .use((0, cors_1.default)(corsOrigin))
    .use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: true }))
    .use("/", apiRouter_1.default)
    .use(controller_1.handleError);
exports.default = app;
