import { Router } from "express";
import passport from "passport";
import auth from "./auth";
import secured from "./secured";

const api = Router();

api.get("/", (req, res) => {
	res.send({
		name: "racolapp",
		status: "running"
	});
});

api.use("/", passport.authenticate("jwt", { session: false }), secured);
api.use("/auth", auth);

export default api;
