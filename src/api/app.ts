import express, { ErrorRequestHandler } from "express";
import mongoose from "mongoose";
import configEnv from "../env";
import jwt from "jsonwebtoken";
import ExpressError from "../ExpressError";
import morgan from "morgan";
import users from "./users/user.routes";
import cors, { CorsOptions } from "cors";

export default function () {
	const app = express();

	app.use(express.json());
	app.use(morgan("dev"));
	app.use(cors(corsConfig));

	// IMPORT ROUTES HERE
	app.use("/users", users);

	// ERROR HANDLING ROUTES
	const errHandler: ErrorRequestHandler = (err, req, res, next) => {
		const error = new ExpressError("Route not found", 404);
		next(error);
	};

	const catchAllErrors: ErrorRequestHandler = (err, req, res, next) => {
		const { statusCode = 500 } = err;
		if (!err.message) err.message = "Something went wrong!";
		res.status(statusCode).json(err);
	};

	app.all("*", errHandler);
	app.use(catchAllErrors);

	return app;
}

const corsConfig: CorsOptions = {
	credentials: true,
};
