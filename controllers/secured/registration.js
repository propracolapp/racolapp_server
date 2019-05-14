import { Router } from "express";
import Registrations from "../../models/Registrations";
import jwt from "jsonwebtoken";
import verifyToken from "../verifyToken"
const api = Router();
api.get("/userID/:userID", verifyToken ,async (req, res) => {
	
			await Registrations.findAll({ where: { UserID: req.params.userID } })
				.then(function(data) {
					console.log(req.body);
					res.json({ data }).status(200);
				})
				.catch(function(err) {
					res.status(500);
					res.json({ error: err.message });
				});
});
api.get("/", async (req, res) => {
	await Registrations.findAll()
		.then(data => {
			res.status(200);
			res.json({
				route: data
			});
		})
		.catch(err => {
			res.status(500);
			res.json({
				error: err.message
			});
		});
});

api.post("/", async (req, res) => {
	jwt.verify(verifyToken, process.env.Token, async (err, decoded) => {
		if (err) {
			res.status(400).json({ error: "Token error : " + err.message });
		} else {
			const createdAt = new now();
			await Registrations.create(
				{
					registrated: 1,
					Users_ID: req.body.usersID,
					Events_ID: req.body.eventsID,
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
	});
});

api.delete("/:id", async (req, res) => {
	jwt.verify(req.body.token, process.env.Token, async (err, decoded) => {
		if (err) {
			res.status(400).json({ error: "Token error : " + err.message });
		} else {
			await Registrations.destroy({
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
	});
});

api.put("/:id", async (req, res) => {
	jwt.verify(req.body.token, process.env.Token, async (err, decoded) => {
		if (err) {
			res.status(400).json({ error: "Token error : " + err.message });
		} else {
			await Registrations.update(
				{
					registrated: req.body.registrated,
					Users_ID: req.body.Users_ID,
					Events_ID: req.body.Events_ID,
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
	});
});
export default api;
