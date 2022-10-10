import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  HasManyGetAssociationsMixin,
} from "sequelize";

import db from "../db";

export interface IUser
  extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
  id: CreationOptional<number>;
  name: string;
  email: string;
  emailVerified?: CreationOptional<Date>;
  image?: CreationOptional<string>;

  // relations
  // getPosts: HasManyGetAssociationsMixin<IPost>;

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
  },
  {
    // don't forget to enable timestamps!
    timestamps: true,
    paranoid: false, // deletedAt
    freezeTableName: true,
  }
);

export default User;
