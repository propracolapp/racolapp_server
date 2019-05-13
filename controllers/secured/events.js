import { Router } from "express";
import Events from "../../models/Events";
import { now } from "moment";
import jwt from "jsonwebtoken";

const api = Router();

// Add user
api.post("/", async (req, res) => {
	jwt.verify(req.body.token, process.env.Token, async (err, decoded) => {
		if (err) {
			res.status(400).json({ error: "Token error : " + err.message });
		} else {
			const createdAt = new now();
			await Events.create(
				{
					name: req.body.name,
					long: req.body.long,
					lat: req.body.lat,
					capacity: req.body.capacity,
					date: req.body.date,
					description: req.body.description,
					duration: req.body.description,
					counterViews: req.body.counterViews,
					Users_ID: req.body.Users_ID,
					TypeEvents_ID: req.body.TypeEvents_ID,
					created_at: createdAt
				},
				{ where: { ID: req.body.id }, returning: true, plain: true }
			)
				.then(function(data) {
					res.status(200);
					res.json(data.get({ plain: true }));
				})
				.catch(function(err) {
					res.status(500);
					res.json({
						error: err.message
					});
				});
		}
	});
});

// modify event by id
api.put("/:id", async (req, res) => {
	jwt.verify(req.body.token, process.env.Token, async (err, decoded) => {
		if (err) {
			res.status(400).json({ error: "Token error : " + err.message });
		} else {
			await Events.update(
				{
					name: req.body.name,
					long: req.body.long,
					lat: req.body.lat,
					capacity: req.body.capacity,
					date: req.body.date,
					description: req.body.description,
					duration: req.body.description,
					counterViews: req.body.counterViews,
					Users_ID: req.body.Users_ID,
					TypeEvents_ID: req.body.TypeEvents_ID,
					created_at: createdAt
				},
				{ where: { ID: req.body.id }, returning: true, plain: true }
			)
				.then(function(data) {
					res.status(200);
					res.json(data.get({ plain: true }));
				})
				.catch(function(err) {
					res.status(500);
					res.json({ error: err.message });
				});
		}
	});
});

//delete event by id
api.delete("/:id", async (req, res) => {
	jwt.verify(req.body.token, process.env.Token, async (err, decoded) => {
		if (err) {
			res.status(400).json({ error: "Token error : " + err.message });
		} else {
			await Events.destroy({
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

// modify event by id
api.get("/userID", async (req, res) => {
	jwt.verify(req.body.token, process.env.Token, async (err, decoded) => {
		if (err) {
			res.status(400).json({ error: "Token error : " + err.message });
		} else {
			await Events.findAll(
				{ where: { ID: req.body.userId }, returning: true, plain: true }
			)
				.then(function(data) {
					res.status(200);
					res.json(data.get({ plain: true }));
				})
				.catch(function(err) {
					res.status(500);
					res.json({ error: err.message });
				});
		}
	});
});

export default api;
