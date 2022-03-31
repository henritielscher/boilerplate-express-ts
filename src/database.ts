import mongoose from "mongoose";
import configEnv from "./env";

export default async function () {
	try {
		await mongoose.connect(configEnv.DB_URL);
		console.log("Database connected");
	} catch (err) {
		throw err;
	}
}
