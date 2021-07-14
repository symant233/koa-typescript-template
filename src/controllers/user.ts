import { Context } from 'koa';
import db from '../database';

class UserController {
  getAllUsers = async (ctx: Context) => {
    const users = await db.user.find();
    ctx.body = users;
  };

  getUser = async (ctx: Context) => {
    const id: number = ctx.params.id;
    const rs = await db.user.findOne({ id });
    if (!rs) {
      ctx.throw(404, 'invalid user id');
    }
    ctx.body = rs;
  };

  createUser = async (ctx: any) => {
    const { email, name } = ctx.request.body;
    const newUser = db.user.create({ email, name });
    await db.user
      .save(newUser)
      .then(() => {
        ctx.body = newUser;
      })
      .catch((err) => {
        ctx.throw(500, `${err.name}: ${err.code}`);
      });
  };
}

export default new UserController();
