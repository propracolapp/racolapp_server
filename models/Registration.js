"use strict";
module.exports = (sequelize, DataTypes) => {
	const Registration = sequelize.define(
		"Registration",
		{
			registrated: DataTypes.NUMBER,
			user_id: DataTypes.NUMBER,
			events_id: DataTypes.NUMBER
		},
		{}
	);
	Registration.associate = function(models) {
		// associations can be defined here
	};
	return Registration;
};
