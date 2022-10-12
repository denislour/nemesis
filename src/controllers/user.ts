import { Context } from "koa";
import bcrypt from "bcryptjs";
import User, { IUser } from "../models/user";
import UserSerializer from "../serializers/userSerializer";
import { CreationAttributes, Model } from "sequelize";

export const register = async (ctx: Context) => {
  const user: CreationAttributes<IUser> = ctx.request
    .body as CreationAttributes<IUser>;

  const existedUser = await User.findOne({ where: { email: user.email } });
  if (existedUser) {
    return (ctx.body = { message: "User already existed" });
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);
  const newUser: Model<CreationAttributes<IUser>> = await User.create({
    email: user.email,
    password: hashedPassword,
  });
  return (ctx.body = await UserSerializer.serialize(newUser));
};
