"use strict";
module.exports = (sequelize, DataTypes) => {
	const Events = sequelize.define(
		"Events",
		{
			id: DataTypes.NUMBER,
			name: DataTypes.STRING,
			long: DataTypes.STRING,
			lat: DataTypes.STRING,
			capacity: DataTypes.STRING,
			date: DataTypes.DATE,
			description: DataTypes.STRING,
			duration: DataTypes.STRING,
			counterViews: DataTypes.NUMBER,
			user_id: DataTypes.NUMBER,
			typeEvent_id: DataTypes.NUMBER
		},
		{}
	);
	Events.associate = function(models) {
		// associations can be defined here
	};
	return Events;
};
