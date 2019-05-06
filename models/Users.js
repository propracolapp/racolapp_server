import Sequelize, { Model } from "sequelize";
/* jshint indent: 1 */

export default class Users extends Model {
	static init(database) {
		return super.init(
			{
				ID: {
					type: Sequelize.INTEGER(11),
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				pseudo: {
					type: Sequelize.STRING(255),
					allowNull: false,
					unique: true
				},
				mail: {
					type: Sequelize.STRING(255),
					allowNull: true,
					unique: true
				},
				password: {
					type: Sequelize.STRING(255),
					allowNull: true
				},
				active: {
					type: Sequelize.INTEGER(4),
					allowNull: true
				},
				premium: {
					type: Sequelize.INTEGER(4),
					allowNull: true
				},
				img_profil: {
					type: Sequelize.STRING(45),
					allowNull: true
				}
			},
			{
				tableName: "Users",
				sequelize: database
			}
		);
	}
}
