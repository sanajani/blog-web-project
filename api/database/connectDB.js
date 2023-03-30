import mongoose from "mongoose";


const databaseConnection = async (DB_URL) => {

    try {
        mongoose.connect(DB_URL,{
            useNewUrlParser:true
        });
        console.log("Connection Successfully!!!");
    } catch (error) {
        console.log(error)
    }
}


export default databaseConnection