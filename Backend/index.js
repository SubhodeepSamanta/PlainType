import express from 'express'
import connectDB from './utilities/connectDB.js';
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import commentRouter from './routes/comment.route.js'

const app=express();
const PORT=process.env.PORT;
connectDB();
app.use(express.json());

app.use('/users',userRouter);
app.use('/posts',postRouter);
app.use('/comments',commentRouter);


app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        "status": error.status || 500,
        "message": error.message || "Internal Server Error",
    })
})
app.listen(PORT,()=>{
    console.log(`server connected on port ${PORT}`);
})