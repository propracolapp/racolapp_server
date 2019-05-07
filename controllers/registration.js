import { Router } from "express";
import Registrations from '../models/Registrations';

const api = Router();

api.get("/", async (req, res) => {
	await Registrations.findAll().then(data => {
		res.status(200);
		res.json({
			route: data
		});
	}).catch(err =>{
		res.status(500);
		res.json({
			error: err.message
		})
	});
});

api.post("/", async (req, res) =>{
	const createdAt = new now();
	await Registrations.create({
        registrated: req.body.registrated,
        Users_ID: req.body.Users_ID,
        Events_ID: req.body.Events_ID,
		created_at: createdAt
	},
	{ where: { ID: req.body.id }, returning: true, plain: true })
	.then(function(data) {
		res.status(200);
		res.json(data.get({ plain: true }));
	})
	.catch(function(error) {
		res.status(500);
		res.json({ error: error.message });
	  });
})


api.delete("/:id", async (req, res) => {
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
  });

  api.put("/:id", async (req, res) => {
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
  });
export default api;
