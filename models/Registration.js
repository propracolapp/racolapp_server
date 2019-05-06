/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Registration', {
		registrated: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		Users_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Users',
				key: 'ID'
			}
		},
		Events_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'Events',
				key: 'ID'
			}
		}
	}, {
		tableName: 'Registration'
	});
};
