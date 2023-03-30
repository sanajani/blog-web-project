import express from 'express';
const postRouter = express.Router();
import { createPost,getAllPost,getSinglePostById,deleteSinglePost } from '../controllers/postController.js';
import { upload } from '../middleware/MulterMiddleware.js';
import { addComment,getCommentsById } from '../controllers/addPostCommentController.js';



postRouter.post("/",upload,createPost);
postRouter.get('/get',getAllPost);
postRouter.get('/getpost/:slug',getSinglePostById);
postRouter.delete('/deletepost/:slug',getSinglePostById);

// post comments
postRouter.post('/newcomment',addComment);
postRouter.get('/getcomments:id',getCommentsById);

export default postRouter