import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import Koa from 'koa';
import koaLogger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import koaHelmet from 'koa-helmet';
import router from './routers';
import db from './database';

createConnection()
  .then(async (conn: Connection) => {
    console.log('MySQL connected!');
    db.connect(conn);

    const app: Koa = new Koa();
    app.use(koaHelmet());
    app.use(koaLogger());
    app.use(bodyParser());
    app.use(router.routes());
    app.listen(3000, () => {
      console.log('Koa running on http://localhost:3000');
    });
  })
  .catch((error) => console.log('TypeORM connection error: ', error));
