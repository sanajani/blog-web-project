import mongoose from "mongoose";


const UserSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    dbToken:{
        type:String,
        default:''
    }
})

const userModel = mongoose.model('user',UserSchema);

export default userModel