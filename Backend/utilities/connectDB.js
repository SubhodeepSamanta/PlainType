import mongoose from 'mongoose'

const connectDB=async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log(`database connected on ${conn.connection.host}`)
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

export default connectDB;