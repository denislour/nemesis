import { Context, Next } from "koa";
import db from "../../db";

export const checkDb = async (ctx: Context, next: Next) => {
  try {
    await db.authenticate();
    ctx.body = { message: "Database connected" };
  } catch (err) {
    ctx.status = 500;
    ctx.body = {
      message: "Unable to connect to the database:",
      detail: `${err}`,
    };
  }
};
