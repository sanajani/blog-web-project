import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    postTitle:{
        type: String,
        required: [true, "Post title is "]
    },
    postSummary:{
        type:String,
        required: [true, "Post title is "]
    },
    postContent: {
        type: String,
        required: [true, "Post title is "]
    },
    postImage: {
        type: String,
        required: [true, "Post title is "]
    },
    slug:{
        type:String,
        required:true,
        unique:true
    }    
},{
    timestamps: true
})

const postModel = mongoose.model('postModel',PostSchema);

export default postModel