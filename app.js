import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import api from "./controllers/index";
import cors from "cors";
import { db } from './models/index';
dotenv.config();

const start = () => {
	try {
		const app = express();
		let PORT = process.env.PORT || 8081;

		app.use(bodyParser.json());
		app.use(cors());

		app.use(
			bodyParser.urlencoded({
				extended: true
			})
		);
		app.use("/", api);
		app.listen(PORT, () => {
			console.log(`Server start on port: ${PORT}`);
		});
	} catch (err) {
		console.log(`Error server doesn't reply ${err.message}`);
	}
};

start();
