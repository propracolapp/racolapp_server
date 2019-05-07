"use strict";
module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define(
		"Users",
		{
			pseudo: DataTypes.STRING,
			mail: DataTypes.STRING,
			password: DataTypes.STRING,
			active: DataTypes.NUMBER,
			prenium: DataTypes.NUMBER,
			img_profile: DataTypes.STRING
		},
		{}
	);
	Users.associate = function(models) {
		// associations can be defined here
	};
	return Users;
};
