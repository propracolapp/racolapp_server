import Sequelize from "sequelize";
import sequelizeAuto from "sequelize-auto";
import mysql from "mysql2";

import Users from "./Users";
import Events from "./Events";
import TypeEvents from "./TypeEvents";
import Registration from "./Registration";

var env = process.env.DB_ENV || "development";
var config = require("../config/config")[env];
export const db = new Sequelize(
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
		console.log("success");
	})
	.catch(err => {
		console.log(" error ");
	});

Users.init(db);
Events.init(db);
TypeEvents.init(db);
Registration.init(db);

Users.belongsToMany(Events, {through: Registration});
Events.belongsToMany(Users, {through: Registration});
TypeEvents.belongsTo(Events);
Users.belongsTo(Events);


