import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CreateUserTable1685860128919 } from './migrations/1685860128919-create-user-table';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [CreateUserTable1685860128919],
  subscribers: [],
});
