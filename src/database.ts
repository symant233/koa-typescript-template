import { Connection, Repository } from 'typeorm';
import { UserModel } from './models/user.entity';

class db {
  public user: Repository<UserModel>;

  public connect = (conn: Connection) => {
    this.user = conn.manager.getRepository(UserModel);
  };
}

export default new db();
