module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'Test-symant233',
  database: 'test',
  synchronize: true,
  entities: ['dist/*.entity{.ts,.js}', 'src/models/*.entity{.ts,.js}'],
};
