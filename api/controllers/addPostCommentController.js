import commentModel from "../models/addCommentModel.js"

const addComment =  async(req,res) => {
    const {name,email,comment,_id} = req.body;
    try {
       const yourcomment = await commentModel.create({
        postId: _id,
        name,
        email,
        comment
        })
        await yourcomment.save();
        console.log(yourcomment);
    res.status(201).json({message:"Comment created successfully",yourcomment})
    } catch (error) {
        console.log(error.message);
    }
}

const getCommentsById = async(req,res) => {
    const {id} = req.params;
    try {
        const postComments = await commentModel.find({postId: id});
        res.status(200).json({message:"Success", postComments})
    } catch (error) {
        console.log(error.message);
    }
}

export {addComment,getCommentsById}