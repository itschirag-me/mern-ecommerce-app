import express from "express";
import proxy from "express-http-proxy";
import Env from "./config/Env";
const app = express();

const UserService = proxy(Env.USER_SERVICE_URL);

app.use("/api/users", UserService);

export default app;
