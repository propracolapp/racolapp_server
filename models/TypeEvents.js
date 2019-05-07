/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define(
		"TypeEvents",
		{
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
			created_at: {
				type: DataTypes.DATE,
				allowNull: true
			},
			updated_at: {
				type: DataTypes.DATE,
				allowNull: true
			}
		},
		{
			tableName: "TypeEvents"
		}
	);
};
