import express from 'express';
const postRouter = express.Router();
import { createPost,getAllPost,getSinglePostById } from '../controllers/postController.js';
import { upload } from '../middleware/MulterMiddleware.js';



postRouter.post("/",upload,createPost);
postRouter.get('/get',getAllPost);
postRouter.get('/getpost/:slug',getSinglePostById);

export default postRouter