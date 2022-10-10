import { Context } from "koa";
import { Attributes } from "sequelize";
import db from "../db";
import Post, { IPost } from "../models/post";
import User, { IUser } from "../models/user";
import PostSerializer from "../serializers/postSerializer";

export const createUser = async (ctx: Context) => {
  let user: Attributes<IUser> = await User.create({
    name: "Le Van A1",
    email: "levana1@gmail.com",
  });
  let post: Attributes<IPost> = await Post.create({
    userId: user.id,
    title: "Bai Viet So 1",
    body: "Body bai viet so mot",
  });
  ctx.body = await PostSerializer.serialize(post);
};
