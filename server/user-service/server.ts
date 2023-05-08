import http from "http";
import app from "./src/app";
import Env from "./src/config/Env";
import mongoose from "mongoose";

const server = http.createServer(app);

server.listen(Env.PORT, async function () {
  try {
    await mongoose.connect(Env.MONGO_URI);
    console.log("http://localhost:%s", Env.PORT);
  } catch (error: any) {
    console.log(error.message);
  }
});
