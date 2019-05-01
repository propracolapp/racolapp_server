import { Router } from "express";
import users from "./users";
import map from "./map";
import events from "./events";

const api = Router();

api.get("/", (req, res) => {
	res.send({
		name: "racolapp",
		status: "running"
	});
});

api.use("/users", users);

api.use("/events", events);

api.use("/map", map);

export default api;
