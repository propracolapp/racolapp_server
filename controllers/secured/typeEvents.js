import { Router } from "express";
import TypeEvents from '../../models/TypeEvents';
import { now } from 'moment';

const api = Router();

api.get("/", async (req, res) => {
	await TypeEvents.findAll()
	.then(data =>{
		console.log(data)
		res.json({
			data
		});
	})
	.catch(err => {
		res.status(500);
		res.json({
			error: err.message
		})
	})
});


api.post("/", async (req, res) =>{
	const createdAt = new now();
	await TypeEvents.create({
		name: req.body.name,
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
	await TypeEvents.destroy({
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
	await TypeEvents.update(
	  {
		name: req.body.name,
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
