const isLogin = async(req,res,next) => {
    try {
        console.log('all the cookies are ',req.cookies);
        const isToken = req.cookies.userToken
        let admin;
        if(!isToken){
            return res.status(400).json({message:"You should login first"})
        }
        console.log(isToken);
        jwt.verify(isToken,process.env.JWT_SECRET_KEY,async (err,user)=>{
            if(err){
                console.log(' ',err.message);
               return res.status(201).json({message:"something went wrong in jsonwebtoken verify",error: err.message})
            }
            admin =await userModel.findById(user.id);
        })
        console.log("User is ",admin);
        res.status(201).json({message:"Successfully have admin", admin})
    } catch (error) {
        console.log(error.message);
    }
}

export { isLogin }