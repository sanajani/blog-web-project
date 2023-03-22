import postModel from '../models/postModel.js';
import slugify from 'slugify'


const createPost = async (req,res) => {
    const {title,summary,content} = req.body;
    const slugifiedTitle = slugify(title,{
        strict: true,
        lower: true
    })
    const {path} = req?.file;
    const newPath = path.slice(6)
    
    if(!title || !summary || !content || !path) return res.status(400).json("all the fileds are required")

    try {
        const createdPost = await postModel.create({
            postTitle: title,
            postSummary: summary,
            postContent: content,
            postImage: newPath,
            slug: slugifiedTitle
        })
        await createdPost.save();
        res.status(201).json(createdPost);
    } catch (error) {
        console.log(error);
    }
}


// get all posts
const getAllPost = async (req,res) => {
    try {
        const posts = await postModel.find().sort('asc');
        res.status(200).json({posts})
    } catch (error) {
        console.log(error.message);
    }
}


const getSinglePostById = async (req,res) => {
    const {slug} = req.params;
    try {
        const post = await postModel.findOne({slug});
        res.status(201).json({message:"Success",post})
    } catch (error) {
        console.log(error.message);
    }
}


export {createPost, getAllPost,getSinglePostById}