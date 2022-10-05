import { QueryInterface, CreationAttributes } from "sequelize";
import Role, { IRole } from "../models/role";

export = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      try {
        const rolesObjects: CreationAttributes<IRole>[] = [
          {
            name: "superadmin",
            type: "admin",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "owner",
            type: "admin",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "admin",
            type: "admin",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "author",
            type: "user",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "user",
            type: "user",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ];
        await Role.bulkCreate<IRole>(rolesObjects, {
          validate: true,
          individualHooks: true,
          transaction,
        });
      } catch (error) {
        console.log(error);
      }
    });
  },
  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      try {
        await queryInterface.bulkDelete(Role.tableName, {}, {});
      } catch (error) {
        console.log(error);
      }
    });
  },
};
