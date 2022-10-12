import Koa from "koa";
import morgan from "koa-morgan";
import router from "./routes";
import bodyParser from "koa-bodyparser";
import passport from "koa-passport";

const app = new Koa();

app
  .use(bodyParser())
  .use(morgan("dev"))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(passport.initialize())
  .use(passport.session());

const port = 8000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started at http://localhost:${port}`);
});
