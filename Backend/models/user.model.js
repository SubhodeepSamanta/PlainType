import mongoose from "mongoose"

const userModel= mongoose.Schema({
    clerkUserId:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    img:{
        type:String,
    },
    savedPosts:{
        type:[String],
        default:[]
    },
},{timestamps: true})

const User= mongoose.model('User',userModel);
export default User;