import Post from "../models/post.model.js"
import User from "../models/user.model.js";


export const getPosts= async(req,res)=>{
    const posts= await Post.find();
    res.status(200).send(posts);
}

export const getPost= async(req,res)=>{
    const slug= req.params.slug;
    const post= await Post.findOne({slug});
    res.status(200).send(post);
}

export const createPost= async(req,res)=>{
    const {userId}= req.auth();
    if(!userId){
        return res.status(401).send('not authenticated');
    }

    const user= await User.findOne({clerkUserId: userId});
    console.log(user);
    if(!user){
        return res.status(401).send('not a valid user');
    }

    const newPost = new Post({user:user._id ,...req.body});
    const post= await newPost.save();
    res.status(200).send(post);
}

export const deletePost= async(req,res)=>{
    const {userId}= req.auth();
    if(!userId){
        return res.status(401).send('not authenticated');
    }

    const user= await User.findOne({clerkUserId: userId});
    if(!user){
        return res.status(401).send('not a valid user');
    }

    const _id= req.params.id;
    const deletedPost= await Post.findOneAndDelete({_id,user: user._id});
    if(!deletedPost){
        res.status(403).send('You can delete only your post');
    }
    res.status(200).send('post deleted successfully');
}