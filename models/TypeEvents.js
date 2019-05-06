/* jshint indent: 1 */
import Sequelize, { Model } from "sequelize";
export default class TypeEvents extends Model {
	static init(database) {
		
		return super.init(
			{
				ID: {
					type: Sequelize.INTEGER(11),
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				name: {
					type: Sequelize.STRING(255),
					allowNull: true
				}
			},
			{
				tableName: "TypeEvents",
				sequelize: database
			}
		);
	}
}
