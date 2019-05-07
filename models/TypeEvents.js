"use strict";
module.exports = (sequelize, DataTypes) => {
	const TypeEvents = sequelize.define(
		"TypeEvents",
		{
			name: DataTypes.STRING
		},
		{}
	);
	TypeEvents.associate = function(models) {
		// associations can be defined here
	};
	return TypeEvents;
};
