import multer from "multer";

const upload = multer({ dest: 'uploads/' })

const createPost = (req,res) => {
    const bodydata = req.body;
    console.log(bodydata);
    res.status(201).json({message:"Success"})
}

export {createPost}