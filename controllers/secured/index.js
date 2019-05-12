import { Router } from "express";
import users from "./users";
import map from "./map";
import events from "./events";
import TypeEvents from "./typeEvents";
import Registrations from "./registration";
import sendgrid from "./sendgrid";

const api = Router();

api.use("/users", users);

api.use("/events", events);

api.use("/typeEvents", TypeEvents);

api.use("/map", map);

api.use("/registrations", Registrations);

api.use("/send", sendgrid);

export default api;
