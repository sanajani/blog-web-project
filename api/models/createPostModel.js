import mongoose from "mongoose";

const createPostSchema = new mongoose.Schema({
    postTitle:{
        type:String,
        required:true
    },
    postDesc:{
        type:String,
        required:true
    }

})