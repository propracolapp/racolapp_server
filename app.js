import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import api from "./controllers/index";
import cors from "cors";
import sequelize from "sequelize-auto";
var env = process.env.NODE_ENV || "development";
var config = require("./config/config")[env];
import mysql from "mysql2";
dotenv.config();

const start = () => {
	try {
		const app = express();
		let PORT = process.env.PORT || 8081;

		var instance = new sequelize(
			config.database,
			config.username,
			config.password,
			{ host: config.host, dialect: config.dialect }
		);
		instance.run( err =>{
			// console.log(instance.tables);
			// console.log(instance.foreignKeys); 
		});

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
