import Koa, { Context } from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

// create koa app
const app: Koa = new Koa();
const router = new Router();

router.get('root', '/', async (ctx: Context) => {
  ctx.body = 'server running';
});

// run app
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);

console.log('Koa running on http://localhost:3000');
