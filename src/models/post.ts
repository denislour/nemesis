import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from "sequelize";

import db from "../db";
import { IUser } from "./user";

export interface IPost
  extends Model<InferAttributes<IPost>, InferCreationAttributes<IPost>> {
  id: CreationOptional<number>;
  title: string;
  body: string;

  userId: ForeignKey<IUser["id"]>;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}

export const Post = db.define<IPost>(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
    paranoid: false, // deletedAt
    freezeTableName: true,
  }
);

export default Post;
