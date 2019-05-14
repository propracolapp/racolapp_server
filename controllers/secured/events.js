import { Router } from "express";
import Events from "../../models/Events";
import { now } from "moment";
import jwt from "jsonwebtoken";
import verifyToken from "../verifyToken";
const api = Router();

// Get event/userID
api.get("/userID/:userID", verifyToken, async (req, res) => {
	await Events.findAll({ where: { UserID: req.params.userID } })
		.then(function(data) {
			console.log(req.body);
			res.json({ data }).status(200);
		})
		.catch(function(err) {
			res.status(500);
			res.json({ error: err.message });
		});
});
// Add user
api.post("/", verifyToken, async (req, res) => {
	const createdAt = new now();
	const event = new Events({
		name: req.body.name,
		long: req.body.long,
		lat: req.body.lat,
		capacity: req.body.capacity,
		date: req.body.date,
		description: req.body.description,
		duration: req.body.duration,
		counterViews: req.body.counterViews,
		UserID: req.body.userID,
		TypeEventsID: req.body.typeEventsID,
		created_at: createdAt
	});
	await event
		.save()
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
});

// modify event by id
api.put("/:id", verifyToken, async (req, res) => {
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
});

//delete event by id
api.delete("/:id", verifyToken, async (req, res) => {
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
});

export default api;
