import { Router } from "express";
import passport from "passport";
import users from "./users";
import map from "./map";
import events from "./events";
import TypeEvents from "./typeEvents";

const api = Router();

api.get("/", passport.authenticate( { session: false }), (req, res) => {
	res.send({
		name: "racolapp",
		status: "running"
	});
});

api.use("/users", passport.authenticate("jwt", { session: false }), users);

api.use("/events", passport.authenticate("jwt", { session: false }), events);

api.use(
	"/typeEvents",
	passport.authenticate("jwt", { session: false }),
	TypeEvents
);

api.use("/map", passport.authenticate("jwt", { session: false }), map);

export default api;
