import { Router } from "express";
import Users from "../models/Users";
import jwt from "jsonwebtoken";
import { now } from "moment";
import { Sequelize } from "sequelize";
import passport from "passport";

const api = Router();

api.get("/", async (req, res) => {
		await Users.findAll()
		.then(data => {
			console.log(data);
			res.json({
				data
			});
		})
		.catch(err => {
			res.status(500).json({
				error: err.message
			});
		});
});
// api login
api.get("/login", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	console.log(username, password);
	await Users.findAll({
		where: {
			pseudo: username,
			password: password,
			active: 1
		}
	})
		.then(data => {
			//	console.log(data);
			res.status(200);
			res.json({
				status: true
			});
		})
		.catch(err => {
			res.status(500);
			res.json({
				status: false
			});
		});
});

// get user by id
api.get("/:id", async (req, res) => {
	await Users.findByPk(req.params.id)
		.then(data => {
			res.status(200);
			res.json({
				data
			});
		})
		.catch(err => {
			res.status(500);
			res.json({
				err: err.message
			});
		});
});
// Register users

api.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
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
	}
);
// modify user by id
api.put(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		await Users.update(
			{
				pseudo: req.body.pseudo,
				mail: req.body.mail,
				password: req.body.password,
				active: req.body.active,
				premium: req.body.premium,
				img_profil: req.body.img_profil,
				created_at: createdAt
			},
			{ where: { ID: req.body.id }, returning: true, plain: true }
		)
			.then(function(data) {
				res.status(200);
				res.json(data.get({ plain: true }));
			})
			.catch(function(error) {
				res.status(500);
				res.json({ error: error.message });
			});
	}
);

// delete user by id
api.delete(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		await Users.destroy({
			where: { ID: req.params.id }
		})
			.then(data => {
				res.status(200);
				res.json(data.get({ plain: true }));
			})
			.catch(err => {
				res.status(500);
				res.json({ error: err.message });
			});
	}
);
export default api;
