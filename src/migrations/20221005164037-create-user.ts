import { QueryInterface, DataTypes } from "sequelize";
import Role from "../models/role";
import User, { IUser } from "../models/user";

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.createTable<IUser>(
        User.tableName,
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          RoleId: {
            type: DataTypes.INTEGER,
            references: {
              model: Role.tableName,
              key: "id",
            },
          },
          active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
        },
        {
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci",
          transaction,
        }
      );
    });
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.dropTable(User.tableName, {
        transaction,
      });
    });
  },
};
