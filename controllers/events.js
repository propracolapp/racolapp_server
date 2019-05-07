import { Router } from "express";
import Events from '../models/Events';

const api = Router();

// get events
api.get("/", async (req, res) => {
	const data = Events.findAll()
	res.json({
		data
	}).status(200);
});

// get event by id
api.get('/:id' async (req,res) =>{
	
	const data = await Event.findByPk(req.params.id)
	res.json({
		data
	});
})
// Add user
api.post('/', async (req, res) =>{

})
export default api;
