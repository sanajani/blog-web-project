import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    postId : {
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const comment = mongoose.model('comments',commentSchema)

export default comment