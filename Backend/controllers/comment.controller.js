import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";


export const getPostComments= async(req,res)=>{
    const {postId}= req.params;
    const comments= await Comment.find({post: postId}).populate("user","username img").sort({createdAt: -1});
    res.status(200).send(comments);
}

export const addComment= async(req,res)=>{
    const {postId}= req.params;
    const {userId}= req.auth();
    if(!userId){
        return res.status(401).send('not authenticated');
    }

    const user= await User.findOne({clerkUserId: userId});
    if(!user){
        return res.status(401).send('not a valid user');
    }
    const newComment= new Comment({
        ...req.body,
        user: user._id,
        post: postId
    })
    await newComment.save();
    setTimeout(()=>
        res.status(201).send(newComment)
        ,5000)
}
export const deleteComment= async(req,res)=>{
    const {id}= req.params;
    const {userId}= req.auth();

    const role= req.auth?.sessionClaims?.metadata?.role || "user";
    if(role==='admin'){
        await Comment.findOneAndDelete({_id: id});
        return res.status(200).send('post deleted successfully');
    }

    if(!userId) return res.status(401).send('not authenticated');
    const user= await User.findOne({clerkUserId: userId});
    if(!user) return res.status(401).send('not a valid user');
    const deletedComment= await Comment.findOneAndDelete({
        _id: id,
        user: user._id     
    })
    if(!deletedComment) return res.status(403).send('you can delete only your comment');
}