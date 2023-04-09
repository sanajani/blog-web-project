import postModel from '../models/postModel.js';
import slugify from 'slugify'

const url = process.env.BASE_URL || ''

const createPost = async (req, res) => {
    const { title, summary, content } = req.body;

    const slugifiedTitle = slugify(title, {
        strict: true,
        lower: true
    })
    const { path } = req?.file;
    if (!title || !summary || !content || !path) return res.status(400).json("all the fileds are required")
    const newPath = path.slice(6)
    const newrPath = `${url}/${newPath}`


    try {
        const createdPost = await postModel.create({
            postTitle: title,
            postSummary: summary,
            postContent: content,
            postImage: newrPath,
            slug: slugifiedTitle
        })
        await createdPost.save();
        res.status(201).json(createdPost);
    } catch (error) {
        console.log(error);
    }
}


// get all posts
const getAllPost = async (req, res) => {
    try {
        const posts = await postModel.find().sort('asc');
        res.status(200).json({ posts })
    } catch (error) {
        console.log(error.message);
    }
}

// get Single post
const getSinglePostById = async (req, res) => {
    const { slug } = req.params;
    try {
        const post = await postModel.findOne({ slug });
        res.status(201).json({ message: "Success", post })
    } catch (error) {
        console.log(error.message);
    }
}

// delete post
const deleteSinglePost = async (req,res) => {
    const {slug} = req.params;
    try {
        const deletePost = await postModel.findOneAndDelete({slug});
        console.log(deletePost);
        return res.status(200).json({message:"Post Deleted Successfully",deletePost});        
    } catch (error) {
        return res.status(400).json({message:"Something went wrong", error: error.message});
    }
}

export { createPost, getAllPost, getSinglePostById, deleteSinglePost }