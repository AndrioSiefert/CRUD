import { DataSource } from 'typeorm';
import UserEntity from '../entity/UserEntity';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './src/config/database.sqlite',
    entities: [UserEntity],
    synchronize: true,
});
