import sequelize from "sequelize";
import sequelizeAuto from "sequelize-auto";
import mysql from "mysql2";

import Users from "./Users";
import Events from "./Events";
import TypeEvents from "./TypeEvents";
import Registration from "./Registration";

var env = process.env.NODE_ENV || "development";
var config = require("../config/config")[env];
export const instance = new sequelize(
	config.database,
	config.username,
	config.password,
	{ host: config.host, dialect: config.dialect }
);
//	instance.run(err => {
//console.log(instance.tables);
// console.log(instance.foreignKeys);
// 	});

// Users.init(instance);
// Events.init(instance);
// TypeEvents.init(instance);
// Registration.init(instance);
