import express from 'express';
const userRoute = express.Router();
import dotenv from 'dotenv';
dotenv.config();

import { login, getUsers } from '../controllers/loginController.js';

userRoute.post('/login',login);
userRoute.get('/admin',getUsers);


export default userRoute