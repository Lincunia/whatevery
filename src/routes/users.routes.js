import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
	res.send("obteniendo usuarios");
});

router.get("/users/:userId", (req, res) => {
	// ":userId" is a parameter
	const { userId } = req.params;
	res.send("obteniendo al usuario " + userId);
});

router.post("/users", (req, res) => {
	res.send("creando usuario");
});

router.delete("/users/:userId", (req, res) => {
	const { userId } = req.params;
	res.send("eliminando usuario" + userId);
});

router.put("/users/:userId", (req, res) => {
	const { userId } = req.params;
	res.send("Actualizando usuario" + userId);
});

export default router;
