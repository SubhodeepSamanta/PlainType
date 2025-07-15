import Post from "../models/post.model.js";
import User from "../models/user.model.js";


export const getSavedPosts= async(req,res)=>{
    const {userId}= req.auth();
    if(!userId) return res.status(401).send('not authenticated');
    const user= await User.findOne({clerkUserId: userId});
    if(!user) return res.status(401).send('not a valid user');
    res.status(200).send(user.savedPosts);
}

export const savePost= async(req,res)=>{
    const {userId}= req.auth();
    const postId= req.body.postId;
    if(!userId) return res.status(401).send('not authenticated');
    const user= await User.findOne({clerkUserId: userId});
    if(!user) return res.status(401).send('not a valid user');
    const isSaved= user.savedPosts.some(p=> p === postId);
    if(!isSaved){
        await User.findOneAndUpdate({_id: user._id},{
            $push: {savedPosts: postId}
        })
    }else{
        await User.findOneAndUpdate({_id: user._id},{
            $pull: {savedPosts: postId}
        })
    }
    res.status(200).json(isSaved ? "post unsaved" : "post saved");
}

export const featurePost= async(req,res)=>{
    const role= req.auth?.sessionClaims?.metadata?.role || "user";
    const postId= req.body.postId;
    if(role==='admin'){
        const post= await Post.findOne({_id: postId});
        if(!post.isFeatured){
            post.isFeatured= true;
        }else{
            post.isFeatured= false;
        }
        await post.save();
        res.status(200).send(post);
    }
}