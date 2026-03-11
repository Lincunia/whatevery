import pg from "pg";

export const pool = new pg.Pool({
	user: "user",
	host: "localhost",
	password: "password",
	database: "database",
	port: "5432"
});
