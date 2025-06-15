import express from 'express'

const app= express();
const PORT= process.env.PORT;
app.use()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/login',(req,res)=>{
    const {username,password}= req.body;

})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
});

