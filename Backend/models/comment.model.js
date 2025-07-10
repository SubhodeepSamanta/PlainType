import mongoose from "mongoose"

const postModel= mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true,
    },
    desc:{
        type:String,
        required:true
    }
},{timestamps: true})

const Comment= mongoose.model('Comment',commentModel);
export default Comment;