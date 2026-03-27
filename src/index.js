import express from "express";
import userRoutes from "./routes/users.routes.js";
import morgan from "morgan";

export const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.json());
app.use(userRoutes);

app.listen(PORT);

console.log(`Currently listening on port ${PORT}`);
