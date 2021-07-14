import { Context } from 'koa';
import Router from 'koa-router';
import UserController from './controllers/user';

const router = new Router();

router.get('root', '/', async (ctx: Context) => {
  ctx.body = { msg: 'success' };
});

router.get('initialize', '/init', UserController.initiaize);

router.get('get all users', '/users', UserController.getAllUsers);

router.allowedMethods({ throw: true });
export default router;
