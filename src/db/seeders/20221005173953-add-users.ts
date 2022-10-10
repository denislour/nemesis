import { QueryInterface, CreationAttributes } from "sequelize";
import Role from "../../models/post";
import User, { IUser } from "../../models/user";

export = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      try {
        const usersData: Array<CreationAttributes<IUser>> = [
          {
            email: "admin@digitalniweb.cz",
            name: "Programmer",
            password: "123456789",
            RoleId: 1,
            active: true,
          },
          {
            email: "owner@test.cz",
            name: "owner",
            password: "123456789",
            RoleId: 2,
            active: true,
          },
          {
            email: "admin@test.cz",
            name: "admin",
            password: "123456789",
            RoleId: 3,
            active: true,
          },
        ];

        // Super User
        let superadminRole = await Role.findOne({
          where: { name: "superadmin" },
          transaction,
        });
        await superadminRole?.createUser(usersData[0], { transaction });

        let admin = await User.create(
          {
            email: "admin@test.cz",
            name: "admin",
            password: "123456789",
            RoleId: superadminRole?.id,
            active: true,
          },
          {
            transaction,
          }
        );

        const author: CreationAttributes<IUser> = {
          name: "Le Van A",
          email: "tenant@digitalniweb.cz",
          password: "123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
          active: true,
        };

        let authorRole = await Role.findOne({
          where: { name: "author" },
          transaction,
        });

        await authorRole?.createUser(author, {
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
        await queryInterface.bulkDelete(User.tableName, {}, {});
      } catch (error) {
        console.log(error);
      }
    });
  },
};
