import { Router } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import Users from "../models/Users";

const api = Router();
// api login
api.get("/login", async (req, res) => {
	passport.authenticate("local", { session: false }, (err, user) => {
		if (err) {
			res.status(400).json({
				error: { message: err }
			});
		}

		const { username, passport } = user;
		const payload = { id, username, passport };
		const token = jwt.sign(payload, process.env.Token);

		res.status(200).json({ data: { user }, meta: { token } });
	})(req, res);
});
// Register users

api.post("/register", async (req, res) => {
	const createdAt = new now();
	const { pseudo, mail, password, password_confirm } = req.body;
	try {
		const user = new Users({
			pseudo,
			mail,
			password,
			password_confirm,
			active: 1,
			premium: 0,
			img_profil: null,
			created_at: createdAt
		});
		await user.save();
		const payload = { id: user.id, pseudo, email };
		const token = jwt.sign(payload, process.env.Token);
		res.status(201).json({ data: { user }, meta: { token } });
	} catch (error) {
		console.log(err.message);
		res.json({ err: err.message }).status(500);
	}
});

export default api;
