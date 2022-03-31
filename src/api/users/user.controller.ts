import { Request, Response } from "express";
import * as Service from "./user.service";

export const registerUser = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;
	let user = await Service.findUserByEmail(email);
	if (user) {
		return res
			.status(400)
			.json({ message: "A user with that email address already exist." });
	}

	await Service.saveUser(username, email, password);
	res.status(200).json({
		message: "New user created!",
	});
};
