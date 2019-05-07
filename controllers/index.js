import { Router } from "express";
import users from "./users";
import map from "./map";
import events from "./events";
import TypeEvents from "./typeEvents";
import Registrations from "../models/Registrations";

const api = Router();

api.get("/", (req, res) => {
	res.send({
		name: "racolapp",
		status: "running"
	});
});

api.use("/users", users);

api.use("/events", events);

api.use("/typeEvents", TypeEvents);

api.use("/map", map);

api.use("/registrations", Registrations);

export default api;
