import { Repository } from 'typeorm';
import GenericRepository from './GenericRepository';
import UserEntity from '../entity/UserEntity';

export default class UserRepository extends GenericRepository<UserEntity> {
    constructor(repository: Repository<UserEntity>) {
        super(repository);
    }
}
