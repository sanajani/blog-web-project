import blogSettings from "../models/blogSettings.js";

const isBlog = async (req,res,next) => {
    let blogSetting = await blogSettings.find({});
    let blogLength = blogSetting.length;
    if(blogLength === 0){
        return res.status(201).json({message:"you should first setup your blog : ",isblog:false})
    }
    return res.status(201).json({message:"you blog is setuped successfully : ",isblog:true})
}

export {isBlog}