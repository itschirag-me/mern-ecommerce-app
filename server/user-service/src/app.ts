import express from "express";
import cors, { CorsOptions } from "cors";
import Env from "./config/Env";
import apiRoutes from "./routes/apiRouter";
import { handleError } from "./controller";

const app = express();

const corsOrigin: CorsOptions = {
  origin: Env.API_GATEWAY,
};

app
  .use(cors(corsOrigin))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/", apiRoutes)
  .use(handleError);

export default app;
