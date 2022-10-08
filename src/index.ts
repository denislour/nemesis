import Koa from "koa";
import morgan from "koa-morgan";
import router from "./routes";

const app = new Koa();

app.use(morgan("dev")).use(router.routes()).use(router.allowedMethods());

const port = 8000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started at http://localhost:${port}`);
});
