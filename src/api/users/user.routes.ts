import express from "express";
import { wrapAsync } from "../../utils";
import { registerUser } from "./user.controller";

const router = express.Router();

router.post("/register", wrapAsync(registerUser));

export default router;
