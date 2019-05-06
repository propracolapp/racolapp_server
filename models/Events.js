/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Events', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		long: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		lat: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		capacity: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		duration: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		counterViews: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Users_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Users',
				key: 'ID'
			}
		},
		TypeEvents_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'TypeEvents',
				key: 'ID'
			}
		}
	}, {
		tableName: 'Events'
	});
};
