import { Context } from 'koa';
import db from '../database';

class UserController {
  initiaize = async (ctx: Context) => {
    const newUser = db.user.create({
      email: 'test@gmail.com',
      name: 'test',
    });
    await db.user.save(newUser);
    ctx.body = newUser;
  };

  getAllUsers = async (ctx: Context) => {
    const users = await db.user.find();
    ctx.body = users;
  };
}

export default new UserController();
