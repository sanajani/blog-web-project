import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    blogTitle:{
        type:String,
        required:true,
    },
    blogDesc:{
        type:String,
        required:true
    }
});

export default mongoose.model('Blog Setting',blogSchema);