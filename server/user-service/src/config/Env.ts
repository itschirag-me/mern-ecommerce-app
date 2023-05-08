import dotenv from "dotenv";
import path from "path";

const NODE_ENV = process.env.NODE_ENV!;

switch (NODE_ENV) {
  case "development":
    dotenv.config({ path: path.join(__dirname, "../../.env.development") });
    break;

  case "production":
    dotenv.config({ path: path.join(__dirname, "../../.env") });
    break;

  default:
    console.log("NODE_ENV not set");
    break;
}

const Env = {
  PORT: process.env.PORT!,

  API_GATEWAY: process.env.API_GATEWAY!,

  HOST: process.env.HOST,

  CLIENT_ID: process.env.CLIENT_ID!,

  CLIENT_SECRET: process.env.CLIENT_SECRET!,

  CLIENT_URL: process.env.CLIENT_URL!,

  REDIRECT_URL: process.env.REDIRECT_URL!,

  MONGO_URI: process.env.MONGO_URI!,
};

export default Env;
