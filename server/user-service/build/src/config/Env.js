"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const NODE_ENV = process.env.NODE_ENV;
switch (NODE_ENV) {
    case "development":
        dotenv_1.default.config({ path: path_1.default.join(__dirname, "../../.env.development") });
        break;
    case "production":
        dotenv_1.default.config({ path: path_1.default.join(__dirname, "../../../.env") });
        break;
    default:
        console.log("NODE_ENV not set");
        break;
}
const Env = {
    PORT: process.env.PORT,
    API_GATEWAY: process.env.API_GATEWAY,
    HOST: process.env.HOST,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    CLIENT_URL: process.env.CLIENT_URL,
    REDIRECT_URL: process.env.REDIRECT_URL,
    MONGO_URI: process.env.MONGO_URI,
};
exports.default = Env;
