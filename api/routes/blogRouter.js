import express from 'express';
import { isBlog } from '../middleware/isBlog.js';
import { blogSettingController } from '../controllers/blogSettingController.js';
const blogRouter = express.Router();

blogRouter.post('/blog-setup',blogSettingController);
blogRouter.get('/isblog',isBlog);

export default blogRouter