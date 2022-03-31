import bcrypt from "bcrypt";
import User from "./user.model";

export const findUserByEmail = async (email: string) => {
	return await User.findOne({ email });
};

export const saveUser = async (
	username: string,
	email: string,
	password: string
) => {
	const hashedPassword = await bcrypt.hash(password as string, 12);
	const newUser = new User({ username, email, password: hashedPassword });
	await newUser.save();
};

export const validatePassword = async (
	passwordInput: string,
	password: string
) => {
	return await bcrypt.compare(passwordInput, password);
};
