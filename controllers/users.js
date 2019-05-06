import {
	Router
} from "express";
import Users from "../models/Users";

const api = Router();

api.get("/", async (req,res) => {

	const data = await Users.findOne({where: {ID: 1}})
	console.log(data);
	
	res.json({
		route: "users",
		user: data,
		
	});
});

export default api;