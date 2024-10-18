import UserRepository from '../repository/UserRepository';
import Controllers from './Controllers';

export default class UserController extends Controllers<UserRepository> {
    constructor(repository: UserRepository) {
        super(repository);
    }
}
