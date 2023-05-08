import { Router } from "express";
import { getUserByEmail, getUserById, getUsers, postUser } from "../controller/UserController";
import { isValid } from "../middleware/isValid";
import { userSchema } from "../utils/validateSchema";

const apiRoutes = Router();

apiRoutes.route("/").get(getUsers).post(isValid(userSchema), postUser);
apiRoutes.route("/:id").get(getUserById);
apiRoutes.route("/:email").get(getUserByEmail);

export default apiRoutes;
