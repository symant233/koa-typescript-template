import { Context } from 'koa';
import Router from 'koa-router';
import UserController from './controllers/user';

const router = new Router();

router.get('root', '/', async (ctx: Context) => {
  ctx.body = { msg: 'server up running' };
});

router.get('get all users', '/users', UserController.getAllUsers);

router.get('get given user', '/users/:id', UserController.getUser);

router.post('create a user', '/users', UserController.createUser);

router.allowedMethods({ throw: true });
export default router;
