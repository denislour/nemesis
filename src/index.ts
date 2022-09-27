import Koa, { Context, Next } from "koa";
import Router from "koa-router";
import morgan from "koa-morgan";

const app = new Koa();
const router = new Router();
app.use(morgan("dev")).use(router.routes()).use(router.allowedMethods());

router.get("/", (ctx: Context, next: Next) => {
  ctx.body = { hello: "World 12" };
});

const port = Number(process.env.PORT) ?? 8000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server started at http://localhost:${port}`);
});
