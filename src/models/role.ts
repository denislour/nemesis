import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
  HasManyGetAssociationsMixin,
  HasManyCreateAssociationMixin,
} from "sequelize";

import db from ".";
import User, { IUser } from "./user";

export interface IRole
  extends Model<InferAttributes<IRole>, InferCreationAttributes<IRole>> {
  id: CreationOptional<number>;
  name: string;
  type: "admin" | "user";
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;

  Users: NonAttribute<IUser[]>;
  getUsers: HasManyGetAssociationsMixin<IUser>;
  createUser: HasManyCreateAssociationMixin<IUser>;
}

export const Role = db.define<IRole>(
  "Role",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // createdAt, updatedAt
    paranoid: false, // deletedAt
    tableName: "Role",
  }
);

Role.hasMany(User);
User.belongsTo(Role);

export default Role;
