import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from "sequelize";

import db from "../db";
import { IRole } from "./role";

export interface IUser
  extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
  id: CreationOptional<number>;
  name: string;
  email: string;
  password: string;
  RoleId: ForeignKey<IRole["id"]>;
  active: boolean;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}

export const User = db.define<IUser>(
  "User",
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
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    timestamps: false, // createdAt, updatedAt
    paranoid: false, // deletedAt
    tableName: "User",
  }
);
export default User;
