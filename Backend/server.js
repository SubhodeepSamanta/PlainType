import express from 'express'
import cors from 'cors'

const app= express();
const PORT= process.env.PORT;
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/login',(req,res)=>{
    const {username,password}= req.body;
    console.log(username,password);
    res.send("data");
})

app.post('/register',(req,res)=>{
    const {username,password}= req.body;
    console.log(username,password);
    res.send("data");
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
});

