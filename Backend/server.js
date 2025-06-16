import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import User from './models/user.model.js';
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser';

const app= express();
const PORT= process.env.PORT;
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const connectDb= async ()=>{
    try{
    const conn= await mongoose.connect(process.env.MONGO_URL)
    console.log(`database is connected on ${conn.connection.host}`);
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}
connectDb();

app.post('/login', async(req,res)=>{
    const {username,password}= req.body;
    const user= await User.findOne({username});
    if(!user) return res.status(404).send('Invalid credentials');
    const hashedPassword= await bcrypt.compare(password,user.password);
    if(!hashedPassword) return res.send(404).send('Invalid credentials');
    const token= jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"strict"
    }).json({id:user._id,username});
})

app.post('/register',async (req,res)=>{
    const {username,password}= req.body;
    const user= await User.findOne({username});
    if(user){
         return res.status(401).send('username already exists');
    }
    const hashedPassword= await bcrypt.hash(password,10);
    const userDoc= new User({username,password:hashedPassword});
    await userDoc.save();
    const token= jwt.sign({id: userDoc._id},process.env.JWT_SECRET,{expiresIn:"1d"});
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"strict"
    })
    res.send(`User registered successfully`);
})

app.post('/profile',(req,res)=>{
    const {token}= req.cookies;
    if(!token) return res.status(401).send('No token');
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err) throw err;
        res.json(decoded);
    })
})

app.post('/logout',(req,res)=>{
    res.cookie('token','').json('ok');
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
});

