import { Router } from "express";
import Users from "../models/Users";
import jwt from 'jsonwebtoken'
import { now } from "moment";

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
			res.status(500);
			res.json({
				error: err.message
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
api.post("/", (req, res) => {
	const createdAt = new now();
	Users.create({
		pseudo: req.body.pseudo,
		mail: req.body.mail,
		password: req.body.password,
		active: req.body.active,
		premium: req.body.premium,
		img_profil: req.body.img_profil,
		created_at: createdAt
	})
		.then(function(data) {
			res.status(200);
			res.json(data.get({ plain: true }));
		})
		.catch(function(error) {
			res.status(500);
			res.json({ error: error.message });
		});
});
// modify user by id
api.put("/:id", (req, res) => {
	Users.update(
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
});
// delete user by id
api.delete("/:id", async (req, res) => {
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
});
export default api;
