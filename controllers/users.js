import { Router } from "express";
import Users from "../models/";

const api = Router();

api.get("/", async (req, res) => {
	const data =  Users.findOne({ where: { ID: 1 } });
	console.log(data);

	res.json({
		route: "users",
		user: data
	});
});

api.post("/", async (req, res) => {
	Users.save({
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
			res.json({ error: error, stackError: error.stack });
		});
});

export default api;
