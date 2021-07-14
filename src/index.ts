import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import Koa, { Context, Next } from 'koa';
import koaLogger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import koaHelmet from 'koa-helmet';
import router from './routers';
import db from './database';

const handler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    let result = {
      status: err.__proto__.status || err.status,
      message: err.message,
    };
    ctx.status = result.status || 502;
    ctx.body = result;
    console.log(result);
  }
};

createConnection()
  .then(async (conn: Connection) => {
    console.log('MySQL connected!');
    db.connect(conn);

    const app: Koa = new Koa();
    app.use(handler);
    app.use(bodyParser());
    app.use(koaHelmet());
    app.use(koaLogger());
    app.use(router.routes());
    app.listen(3000, () => {
      console.log('Koa running on http://localhost:3000');
    });
  })
  .catch((error) => console.log('TypeORM connection error: ', error));
