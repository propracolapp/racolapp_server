// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import { Router } from "express";
import jwt from "jsonwebtoken";
const api = Router();
const mail = require("@sendgrid/mail");
const ai =
	"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";
mail.setApiKey(ai);
const Sendgrid = require("sendgrid")(ai);

api.post("/registered", async (req, res) => {
	const msg = {
		to: `ibrahima.dansoko@outlook.com`,
		from: "ibrahima.dansoko@outlook.com",
		subject: "Inscription",
		text:
			"Bienvenue dans la team Racolapp, votre inscription a bien été prise en compte.",
		html:
			"<strong> Bienvenue dans la team Racolapp, votre inscription a bien été prise en compte. </strong>"
	};
	await mail
		.send(msg)
		.then(data => {
			console.log(data);
			return data;
		})
		.catch(err => {
			console.log(err);
			return err.message;
		});
	res.json({ text: msg.text }).status(200);
});

export default api;
