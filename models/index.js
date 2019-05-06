import sequelize from "sequelize";
import sequelizeAuto from "sequelize-auto";
import mysql from "mysql2";

import Users from "./Users";
import Events from "./Events";
import TypeEvents from "./TypeEvents";
import Registration from "./Registration";

var env = process.env.DB_ENV || "development";
var config = require("../config/config")[env];
export const db = new sequelize(
	config.database,
	config.username,
	config.password,
	{
		host: config.host,
		dialect: config.dialect
	}
);
db.authenticate()
	.then(() => {
		console.log(" err ");
	})
	.catch(err => {
		console.log("success");
	});

Users.init(db);
Events.init(db);
TypeEvents.init(db);
Registration.init(db);
