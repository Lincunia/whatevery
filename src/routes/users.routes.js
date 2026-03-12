import { Router } from "express";
import {
	getUsers,
	getUser,
	createUser,
	deleteUser,
	updateUser,
} from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getUsers);

router.get("/users/:userId", getUser);

router.post("/users", createUser);

router.delete("/users/:userId", deleteUser);

router.put("/users/:userId", updateUser);

export default router;
