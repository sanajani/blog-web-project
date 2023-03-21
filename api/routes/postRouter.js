import express from 'express';
const postRouter = express.Router();
import { createPost } from '../controllers/postController.js';


postRouter.post("/",createPost)


export default postRouter