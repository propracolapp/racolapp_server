import { Router } from "express";
import Users from '../models/Users';

const api = Router();

api.get("/", async (req, res) => {
	res.json({
		Elements: await Users.findAll()
	})
});

export default api;
