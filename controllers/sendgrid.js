// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import mail from "sendgrid";
import { Router } from "express";

const api = Router();
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
			.status(200).end();
	} else {
		res
			.status(500)
			.json({
				error: "error"
			})
			.end();
	}
});

export default api;
