/* jshint indent: 2 */
import Sequelize, { Model } from "sequelize";

export default class Registrations extends Model {
	static init(database) {
		return super.init(
			{
				registrated: {
					type: Sequelize.INTEGER(4),
					allowNull: false,
					primaryKey: true
				},
				Users_ID: {
					type: Sequelize.INTEGER(11),
					allowNull: false,
					primaryKey: true,
					references: {
						model: "Users",
						key: "ID"
					}
				},
				Events_ID: {
					type: Sequelize.INTEGER(11),
					allowNull: false,
					primaryKey: true,
					references: {
						model: "Events",
						key: "ID"
					}
				},
				created_at: {
					type: Sequelize.DATE,
					allowNull: true
				},
				updated_at: {
					type: Sequelize.DATE,
					allowNull: true
				}
			},
			{
				tableName: "Registration",
				sequelize: database,
				timestamps: false
			}
		);
	}
}
