import {dashbord} from '../controllers/dashbordController.js';
import express from 'express';
import {isLogin} from '../middleware/adminLoginAuth.js'

const dashbordRouter = express.Router();


dashbordRouter.get('/dashbord',isLogin,dashbord)

export default dashbordRouter