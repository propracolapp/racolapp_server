import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import api from "./controllers/index";
import cors from "cors";

const start = () => {
	try {
		const app = express();
		const port = process.env.APP_PORT || 8081;
		dotenv.config();

		app.use(bodyParser.json());
		app.use(cors());

		app.use(
			bodyParser.urlencoded({
				extended: true
			})
		);
		app.use("/", api);
		app.listen(port, () => {
			console.log(`Server start on port: ${port}`);
		});
	} catch (err) {
		console.log(`Error server doesn't reply ${err.message}`);
	}
};

start();
