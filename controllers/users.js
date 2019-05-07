import { Router } from "express";

const api = Router();

api.get("/", (req, res) => {
	//	const data = await Users.findOne({where: {ID: 1}})
	//	console.log(data);

	res.json({
		route: "users"
	});
});

export default api;
