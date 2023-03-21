import userModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwtt from 'jsonwebtoken';

const maxAge = 365 * 24 * 60 * 60;

const login = async (req, res) => {
        try {
            const { name, email, password } = req.body;
            if (!name || !email || !password) return res.status(400).json({ message: "All the fields are required" });
            let user = await userModel.findOne({ email });
            console.log("login route ",user._id);
            if (!user) return res.status(400).json({ message: "Invalid user " });
            let isPasswordMatch = await bcrypt.compareSync(password, user.password);
            if (!isPasswordMatch) return res.status(400).json({ message: "Invalid Credintials " });

            const createToken = jwtt.sign({id:user._id},process.env.JWT_SECRET_KEY,{
                expiresIn: maxAge
            });

            res.cookie('userToken',createToken,{
                httpOnly:true,
                maxAge: maxAge * 1000,
            }).status(201).json({ user, number:1 });

        } catch (error) {
            console.log("Error block ", error);
        }
}


const getUsers = (req,res) => {
    const {userToken} = req.cookies;
    jwtt.verify(userToken,process.env.JWT_SECRET_KEY,{},async (err,user)=>{
        try {
            if(err){
                console.log('error block ',err.message);
               return res.status(401).json({message:"something went wrong in jsonwebtoken verify",error: err.message})
            }
            let admin = await userModel.findById(user.id).select('-password');
            return res.status(201).json({message:"Successfully have admin", admin})
        } catch (error) {
            console.log(error.message);
        }
    })
}

export { login, getUsers }