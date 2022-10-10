import { QueryInterface, DataTypes } from "sequelize";
import Post, { IPost } from "../../models/post";
import User from "../../models/user";

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.createTable<IPost>(
        Post.tableName,
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          userId: {
            type: DataTypes.INTEGER,
            references: {
              model: "User",
              key: "id",
            },
          },
          title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
          },
          body: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
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
      return await queryInterface.dropTable(Post.tableName, {
        transaction,
      });
    });
  },
};
