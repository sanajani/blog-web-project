import mongoose from "mongoose";


const databaseConnection = async (DB_URL) => {
    const DB_OPTIONS = {
        dbName:"blogprojectof"
    }

    try {
        mongoose.connect(DB_URL,DB_OPTIONS,{
            useNewUrlParser:true
        });
        console.log("Connection Successfully!!!");
    } catch (error) {
        console.log(error)
    }
}


export default databaseConnection