/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Users', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		pseudo: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		mail: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		active: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		premium: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		img_profil: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'Users'
	});
};
