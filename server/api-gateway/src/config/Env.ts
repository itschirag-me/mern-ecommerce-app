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

  USER_SERVICE_URL: process.env.USER_SERVICE_URL!,
};

export default Env;
