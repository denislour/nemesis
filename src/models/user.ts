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
  email: string;
  password: string;
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
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
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
