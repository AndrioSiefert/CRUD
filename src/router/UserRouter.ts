import express from 'express';
import UserRepository from '../repository/UserRepository';
import UserController from '../controller/UserController';
import { AppDataSource } from '../config/database';

const router = express.Router();
const userRepository = new UserRepository(AppDataSource.getRepository('UserEntity'));
const controllers = new UserController(userRepository);

router.get('/user', (req, res) => controllers.getAll(req, res));
router.get('/user/:id', (req, res) => controllers.getById(req, res));
router.post('/user', (req, res) => controllers.create(req, res));

export default router;
