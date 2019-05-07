import { Router } from "express";
import Users from "../models/Users";

const api = Router();

api.get("/", async (req, res) => {
	const data = await Users.findAll()
		.then(data => {
			console.log(data);
			res.json({
				data
			});
		})
		.catch(err => {
			res.status(500);
			res.json({ error: err.message });
		});
});

// get user by id
api.get("/:id", async (req, res) => {
	const data = await Users.findByPk(req.params.id)
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
	Users.create({
		ID: req.body.id,
		pseudo: req.body.pseudo,
		mail: req.body.mail,
		birthday: req.body.birthday,
		active: req.body.active,
		premium: req.body.premium,
		img_profile: req.body.img_profile
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
api.put("/:id", (req, res, next) => {
	Users.update(
		{
			pseudo: req.body.pseudo,
			mail: req.body.mail,
			birthday: req.body.birthday,
			active: req.body.active,
			premium: req.body.premium,
			img_profile: req.body.img_profile
		},
		{ where: { ID: req.params.id }, returning: true, plain: true }
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
api.delete("/:id", (req, res, next) => {
	Users.destroy({
		where: { id: id }
	}).then(data =>{
		res.status(200)
		res.json(data.get({plain:true}))
	}).catch(err =>{
		res.status(500)
		res.json({ error: err.message})
	});
});
export default api;
