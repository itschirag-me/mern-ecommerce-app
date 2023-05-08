import http from "http";
import app from "./src/app";
import Env from "./src/config/Env";

const server = http.createServer(app);

server.listen(Env.PORT, function () {
  console.log("API gateway serving on http://localhost:%s", Env.PORT);
});
