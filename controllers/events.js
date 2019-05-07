import { Router } from "express";
import Events from "../models/Events";
import { now } from "moment";

const api = Router();

// get events
api.get("/", async (req, res) => {
  const data = await Events.findAll();
  res
    .json({
      data
    })
    .status(200);
});

// get event by id
api.get("/:id", async (req, res) => {
  const data = await Event.findByPk(req.params.id)
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
// Add user
api.post("/", async (req, res) => {
  const createdAt = new now();
  Events.create(
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
});

// modify event by id
api.put("/:id", (req, res) => {
  Events.update(
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
		res.json(data.get({ plain: true}));
	})
	.catch(function(err){
		res.status(500);
		res.json({error: err.message });
	})
});

//delete event by id
api.delete("/:id", async (req, res) => {
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
