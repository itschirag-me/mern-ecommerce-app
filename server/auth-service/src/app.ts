import express from "express";
import cors, { CorsOptions } from "cors";
import Env from "./config/Env";

const app = express();

const corsOrigin: CorsOptions = {
  origin: Env.API_GATEWAY,
};

app
  .use(cors(corsOrigin))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(handleError);

export default app;
