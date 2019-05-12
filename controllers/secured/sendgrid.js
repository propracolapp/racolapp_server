// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import { Router } from "express";
import jwt from "jsonwebtoken";

const api = Router();
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

api.get("/registered", (req, res) => {
	const msg = {
		to: `${req.body.email}`,
		from: "contact@racolapp.com",
		subject: "Inscription success",
		text: "...",
		html: "<strong>Vous avez été bien inscript</strong>"
	};
	mail.send(msg);
	if (res.status === 200) {
		res
			.json({
				text: msg.text
			})
			.status(200)
			.end();
	} else {
		res
			.status(500)
			.json({
				error: "error"
			})
			.end();
	}
});
// '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' apres avoir mis ça dans ton fichier .env tu le supprime de la
export default api;
