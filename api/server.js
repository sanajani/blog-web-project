// importtent middlewares 
import express from 'express';
import dotenv from 'dotenv';
import cros from 'cors';
import cookieParser from 'cookie-parser';
// import session from 'express-session';

dotenv.config();
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cros({credentials:true,origin:'http://localhost:3000'}));
const PORT = process.env.PORT || 7000

// databse url
import databaseConnection from './database/connectDB.js';
// database connection
const DB_URL = process.env.DB_URL


// middlewares created by me
import blogRouter from './routes/blogRouter.js';
import userRoute from './routes/userRoute.js';
import dashbordRouter from './routes/dashbordRouter.js';
import postRouter from './routes/postRouter.js';

app.use('/blog',blogRouter);
app.use('/user',userRoute);
app.use('/admin',dashbordRouter);
app.use('/post',postRouter)

app.listen(PORT,()=>{
    console.log(`your website is running on port http://localhost:${PORT}`)
    databaseConnection(DB_URL)
})